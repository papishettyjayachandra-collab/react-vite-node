import React from "react";

function StudentList({ students, deleteStudent }) {
  return (
    <table border="1" cellPadding="10" style={{ margin: "20px auto" }}>
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.rollNo}>
            <td>{student.rollNo}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
            <td>
              <button onClick={() => deleteStudent(student.rollNo)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;