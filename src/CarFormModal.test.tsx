// // src/CarFormModal.test.tsx
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithClient } from './test-utils';
// import CarFormModal from './lab11/CarFormModal';
// import { describe, expect, test, vi } from 'vitest';

// describe('CarFormModal component', () => {
//   const onClose = vi.fn();

//   test('renders fields and buttons', () => {
//     renderWithClient(<CarFormModal open={true} onClose={onClose} />);
//     expect(screen.getByLabelText(/Brand/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Model/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Year/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
//   });

//   test('calls onClose when cancel clicked', async () => {
//     renderWithClient(<CarFormModal open={true} onClose={onClose} />);
//     const cancelButton = screen.getByRole('button', { name: /Cancel/i });
//     await userEvent.click(cancelButton);
//     expect(onClose).toHaveBeenCalled();
//   });
// });
