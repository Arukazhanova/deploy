const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      alert("Login failed!");
      return;
    }

    const tokenHeader = response.headers.get("Authorization");

    if (!tokenHeader) {
      alert("Токен не получен!");
      return;
    }

    const token = tokenHeader.replace("Bearer ", "");

    // 💾 сохраняем токен
    localStorage.setItem("token", token);

    // 🔥 redirect на защищенную страницу
    window.location.href = "/lab10";

  } catch (error) {
    alert("Ошибка сети!");
  }
};
