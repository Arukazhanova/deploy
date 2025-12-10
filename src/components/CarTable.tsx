import React from "react";
import type { Car } from "../types";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface CarTableProps {
  cars: Car[];
  onEdit: (car: Car) => void;
  onDelete: (id: number) => void;
}

const CarTable: React.FC<CarTableProps> = ({ cars, onEdit, onDelete }) => {
  return (
    <Table sx={{ marginTop: 3 }}>
      <TableHead>
        <TableRow>
          <TableCell><b>ID</b></TableCell>
          <TableCell><b>Brand</b></TableCell>
          <TableCell><b>Model</b></TableCell>
          <TableCell><b>Year</b></TableCell>
          <TableCell><b>Actions</b></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell>{car.id}</TableCell>
            <TableCell>{car.brand}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.year}</TableCell>

            <TableCell>
              <Tooltip title="Edit">
                <IconButton color="primary" onClick={() => onEdit(car)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={() => onDelete(car.id!)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CarTable;
