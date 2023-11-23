import React, { useEffect, useState } from 'react';
import  axios  from 'axios';


const AllStudent = () => {

    const [data, setData]= useState([]);
    useEffect(() => {
        axios.get('/all-students')
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
          });
      }, []);


  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = data.sort((a, b) => {
    const fieldA = a.firstname.toLowerCase();
    const fieldB = b.firstname.toLowerCase();

    if (sortOrder === 'asc') {
      return fieldA.localeCompare(fieldB);
    } else {
      return fieldB.localeCompare(fieldA);
    }
  });

  const filteredData = sortedData.filter((student) => {
    const fullName = `${student.firstname} ${student.lastname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container p-10 ml-16">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 px-2 py-1 mb-4 rounded-md"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={handleSort}
            >
              First Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Birthdate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roll
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Blood Group
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Religion
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Batch
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Postcode
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((student, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{student.firstname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.lastname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.birthdate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={student.image} alt={`${student.firstname} ${student.lastname}`} className="w-10 h-10 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{student.roll}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.bloodgroup}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.religion}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.student_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.batch}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.dept}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.state}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.postcode}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.country}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudent;
