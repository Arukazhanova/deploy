import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CarTable from "../components/CarTable";
import CarFormModal from "../components/CarFormModal";
import { getCars, addCar, updateCar, deleteCar } from "../api/carService";
import type { Car } from "../types";
import { Button, Stack } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Lab11: React.FC = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuth();

  const { data: cars = [] } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  const addMutation = useMutation({
    mutationFn: addCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cars"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, car }: { id: number; car: Car }) =>
      updateCar(id, car),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cars"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cars"] }),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleEdit = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleSave = (car: Car) => {
    if (selectedCar?.id) {
      updateMutation.mutate({ id: selectedCar.id, car });
    } else {
      addMutation.mutate(car);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Car Manager</h1>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setSelectedCar(null);
            setIsModalOpen(true);
          }}
        >
          Add Car
        </Button>

        <Button variant="outlined" color="error" onClick={logout}>
          Log out
        </Button>
      </Stack>

      <CarTable
        cars={cars}
        onEdit={handleEdit}
        onDelete={(id) => deleteMutation.mutate(id)}
      />

      <CarFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carToEdit={selectedCar}
        onSave={handleSave}
      />
    </div>
  );
};

export default Lab11;
