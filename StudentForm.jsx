import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo || !name || !marks) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      rollNo,
      name,
      marks
    };

    addStudent(newStudent);

    setRollNo("");
    setName("");
    setMarks("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <br /><br />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;