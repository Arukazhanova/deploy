import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Неверный логин или пароль");
        return;
      }

      // JWT приходит в заголовке Authorization
      const token = res.headers.get("Authorization");

      if (!token) {
        setError("Сервер не прислал токен");
        return;
      }

      // Сохраняем токен (удаляем Bearer)
      login(token.replace("Bearer ", ""));

      // Переход в защищённую область
      window.location.href = "/lab11";

    } catch {
      setError("Ошибка соединения с сервером");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ maxWidth: 350, margin: "80px auto", padding: 20, textAlign: "center" }}
    >
      <Typography variant="h5" gutterBottom>
        Вход
      </Typography>

      <TextField
        fullWidth
        label="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />

      {error && (
        <Typography color="error" style={{ marginTop: 10 }}>
          {error}
        </Typography>
      )}

      <Button fullWidth variant="contained" style={{ marginTop: 20 }} onClick={handleLogin}>
        Войти
      </Button>
    </Paper>
  );
};

export default Login;
