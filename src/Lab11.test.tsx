// // src/Lab11.test.tsx
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Lab11 from "./lab11/Lab11";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { expect, test } from "vitest";

// test("opens add car modal when + Add Car button is clicked", async () => {
//   const queryClient = new QueryClient();

//   render(
//     <QueryClientProvider client={queryClient}>
//       <Lab11 />
//     </QueryClientProvider>
//   );

//   const addButton = screen.getByRole("button", { name: /\+ Add Car/i });
//   expect(addButton).toBeInTheDocument();

//   await userEvent.click(addButton);

//   const saveButton = await screen.findByRole("button", { name: /Save/i });
//   expect(saveButton).toBeInTheDocument();
// });
