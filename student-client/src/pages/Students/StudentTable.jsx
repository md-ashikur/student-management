import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students'); // Replace with your API endpoint
      setStudents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleDelete = async (id) => {
    // Handle delete logic for the student with the given ID
    try {
      await axios.delete(`http://localhost:5000/students/${id}`); // Replace with your delete API endpoint
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Image</th>
            <th>Actions</th> {/* Added column for actions */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>
                {/* Display image here */}
                <img src={`data:image/jpeg;base64,${student.image}`} alt="Student" />
              </td>
              <td>
                {/* Action buttons */}
                <Link to={`/students/${student.id}`}>Update</Link>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
