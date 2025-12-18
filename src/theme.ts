import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f7a8c9", // нежно-розовый
      light: "#ffd3e7",
      dark: "#e37fa8",
    },
    secondary: {
      main: "#ffe6f1",
    },
    background: {
      default: "#fff6fa",
      paper: "#ffffff",
    },
  },

  components: {
    // 🌸 Кнопки
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          backgroundColor: "#f7a8c9",
          color: "#fff",
          boxShadow: "0 3px 10px rgba(247, 168, 201, 0.4)",
          "&:hover": {
            backgroundColor: "#e892b7",
            boxShadow: "0 4px 12px rgba(233, 146, 183, 0.6)"
          }
        }
      }
    },

    // 🌸 Поля ввода
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#f7a8c9",
            },
            "&:hover fieldset": {
              borderColor: "#e07daa",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e07daa",
            },
          },
        },
      },
    },

    // 🌸 Модальные окна
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "15px",
          padding: "10px",
          background: "#fff8fb",
          boxShadow: "0 5px 20px rgba(247,168,201,0.35)"
        }
      }
    },

    // 🌸 Таблицы
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffe0ef",
        }
      }
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "#fff3f9"
          }
        }
      }
    }
  }
});
