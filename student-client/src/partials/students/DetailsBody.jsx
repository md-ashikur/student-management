import React from 'react';

const DetailsBody = () => {
  const student = {
    firstname: 'John',
    lastname: 'Doe',
    birthdate: '2000-05-15',
    gender: 'Male',
    image: 'john_doe.jpg',
    roll: 101,
    bloodgroup: 'O+',
    religion: 'Christian',
    student_id: 'ABCD123',
    batch: '2023',
    dept: 'Computer Science',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
    country: 'USA',
    email: 'john@example.com',
    phone: '123-456-7890',
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <img
              src={student.image}
              alt={`${student.firstname} ${student.lastname}`}
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-6">
            {`${student.firstname} ${student.lastname}`}
          </h2>
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Roll: {student.roll}
            </p>
            <p className="text-sm text-gray-600">
              Gender: {student.gender}
            </p>
            <p className="text-sm text-gray-600">
              Birthdate: {student.birthdate}
            </p>
            {/* Include other fields similarly */}
            <p className="text-sm text-gray-600">
              Address: {student.address}, {student.city}, {student.state}, {student.country}, {student.postcode}
            </p>
            <p className="text-sm text-gray-600">
              Email: {student.email}
            </p>
            <p className="text-sm text-gray-600">
              Phone: {student.phone}
            </p>
            <p className="text-sm text-gray-600">
              Blood Group: {student.bloodgroup}
            </p>
            <p className="text-sm text-gray-600">
              Religion: {student.religion}
            </p>
            <p className="text-sm text-gray-600">
              Student ID: {student.student_id}
            </p>
            <p className="text-sm text-gray-600">
              Batch: {student.batch}
            </p>
            <p className="text-sm text-gray-600">
              Department: {student.dept}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBody;
