import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode, ReactElement } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { token } = useAuth();

  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
