import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div style={{ marginBottom: 40, padding: 20 }}>
      <h2>Date Picker Example</h2>
      <DatePicker
        selected={date}
        onChange={(value: Date | null) => setDate(value)}
        placeholderText="Select a date"
        dateFormat="yyyy-MM-dd"
      />
      <p>Выбранная дата: {date ? date.toDateString() : "не выбрана"}</p>
    </div>
  );
};

export default MyDatePicker;
