import React, { useState, useEffect } from "react";
import type { Car } from "../types";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";

interface CarFormModalProps {
  open: boolean;
  carToEdit?: Car | null;
  onClose: () => void;
  onSave: (car: Car) => void;
}

const CarFormModal: React.FC<CarFormModalProps> = ({
  open,
  carToEdit,
  onClose,
  onSave,
}) => {
  const [form, setForm] = useState<Partial<Car>>({
    brand: "",
    model: "",
    year: "",
  });

  // Сбрасываем форму при открытии модалки
useEffect(() => {
  if (!open) return;

  setForm(carToEdit ?? { brand: "", model: "", year: "" });
}, [open, carToEdit]);

  const handleChange = (field: keyof Car, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.brand || !form.model || !form.year) {
      alert("Fill all fields");
      return;
    }

    onSave(form as Car);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{carToEdit ? "Edit Car" : "Add Car"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ marginTop: 1 }}>
          <TextField
            label="Brand"
            value={form.brand ?? ""}
            onChange={(e) => handleChange("brand", e.target.value)}
            fullWidth
          />

          <TextField
            label="Model"
            value={form.model ?? ""}
            onChange={(e) => handleChange("model", e.target.value)}
            fullWidth
          />

          <TextField
            label="Year"
            value={form.year ?? ""}
            onChange={(e) => handleChange("year", e.target.value)}
            fullWidth
          />
        </Stack>
      </DialogContent>

      <DialogActions>
  <Button
    onClick={onClose}
    variant="outlined"
    sx={{
      borderColor: "#f7a8c9",
      color: "#e07daa",
      "&:hover": {
        borderColor: "#e07daa",
        backgroundColor: "#ffe6f1",
      }
    }}
  >
    Cancel
  </Button>

  <Button
    onClick={handleSubmit}
    variant="contained"
    sx={{
      backgroundColor: "#f7a8c9",
      "&:hover": { backgroundColor: "#e892b7" }
    }}
  >
    Save
  </Button>
</DialogActions>

    </Dialog>
  );
};

export default CarFormModal;
