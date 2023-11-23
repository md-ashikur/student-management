import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    gender: '',
    // Add other fields you want to update
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/students/${id}`, student);
      console.log(response.data); // Check the structure of the response
      setStudent(response.data); // Assuming the response contains student details
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/students/${id}`, student);
      window.location.href = '/table';
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Check for the existence of student before rendering the form
  if (!student || Object.keys(student).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={student.gender}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other input fields for updating other details */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
