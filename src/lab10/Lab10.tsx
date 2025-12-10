import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, addUser, deleteUser } from "../api/userService";
import type { User } from "../types";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Lab10: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: users = [], error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const [form, setForm] = useState<User>({
    id: 0,
    username: "",
    password: "",
    role: "",
  });

  const handleAdd = () => {
    if (!form.username || !form.password || !form.role) {
      alert("Заполните все поля");
      return;
    }
    addMutation.mutate(form);
    setForm({ id: 0, username: "", password: "", role: "" });
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 600, margin: "20px auto" }}>
      <Typography variant="h4" gutterBottom>
        Управление пользователями (Lab 10)
      </Typography>

      {error && (
        <Typography color="error">
          Ошибка загрузки данных — возможно, нет токена
        </Typography>
      )}

      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <TextField
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <TextField
          label="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />

        <Button variant="contained" onClick={handleAdd}>
          Добавить пользователя
        </Button>
      </Stack>

      <Typography variant="h6">Список пользователей:</Typography>
      <List>
        {users.map((u: User) => (
          <ListItem
            key={u.id}
            secondaryAction={
              <IconButton
                edge="end"
                color="error"
                onClick={() => u.id && deleteMutation.mutate(u.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${u.username} (${u.role})`}
              secondary={`ID: ${u.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Lab10;
