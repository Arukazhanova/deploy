import React from "react";
import { getCars } from "../api/carService";
import type { Car } from "../types";

const ExportCSVButton: React.FC = () => {
  const handleExport = async () => {
    const cars: Car[] = await getCars();
    const header = "ID,Brand,Model,Year";
    const rows = cars.map(
      (c) => `${c.id ?? ""},${c.brand},${c.model},${c.year}`
    );

    const csvContent =
      "data:text/csv;charset=utf-8," + [header, ...rows].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "cars.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleExport}>Export CSV</button>;
};

export default ExportCSVButton;
