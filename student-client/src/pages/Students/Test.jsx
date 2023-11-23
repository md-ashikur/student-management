import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Test = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/submit-form', data);
        console.log(response.data); // Handle response from the server
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
  };



//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('name', data.name);
//       formData.append('image', data.image[0]); // Assuming only one file is uploaded
//       formData.append('gender', data.gender);
//       formData.append('birthdate', data.birthdate);
//       formData.append('bio', data.bio);
//       formData.append('country', data.country);
//       formData.append('hobby', data.hobby);
//       formData.append('email', data.email);
//       formData.append('phone', data.phone);
//       // Append other form fields similarly

//       const response = await axios.post('http://localhost:5000/submit-form', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data' // Ensure proper content type for file upload
//         }
//       });
//       console.log(response.data); // Handle response from the server
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//     }
//   };
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register('name', { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            {...register('image', { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.image && <span className="text-red-500">Image is required</span>}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1">Gender</label>
          <select
            name="gender"
            {...register('gender', { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-red-500">Please select a gender</span>}
        </div>

        {/* Birthdate */}
        <div className="mb-4">
          <label htmlFor="birthdate" className="block mb-1">
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            {...register('birthdate', { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.birthdate && <span className="text-red-500">Birthdate is required</span>}
        </div>

       

        {/* Textarea */}
        <div className="mb-4">
          <label htmlFor="bio" className="block mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            {...register('bio')}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        {/* Country Select */}
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">
            Country
          </label>
          <select
    name="country"
    {...register('country', { required: true })}
    className="border border-gray-300 rounded-md px-3 py-2 w-full"
  >
    <option value="">Select Country</option>
    <option value="BD">Bangladesh</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="JP">Japan</option>
    <option value="CN">China</option>
    <option value="IN">India</option>
    <option value="UK">United Kingdom</option>
    <option value="DE">Germany</option>
    <option value="FR">France</option>
    <option value="BR">Brazil</option>
    {/* Add more countries as needed */}
  </select>
          {errors.country && <span className="text-red-500">Please select a country</span>}
        </div>


         {/* Hobby - Football */}
         <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hobby"
              value="football"
              {...register('hobby')}
              className="form-checkbox border border-gray-300 rounded-md mr-2"
            />
            <span>Football</span>
          </label>
        </div>

        {/* Hobby - Cricket */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hobby"
              value="cricket"
              {...register('hobby')}
              className="form-checkbox border border-gray-300 rounded-md mr-2"
            />
            <span>Cricket</span>
          </label>
        </div>

        {/* Hobby - Travelling */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hobby"
              value="travelling"
              {...register('hobby')}
              className="form-checkbox border border-gray-300 rounded-md mr-2"
            />
            <span>Travelling</span>
          </label>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.email && <span className="text-red-500">Enter a valid email address</span>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            {...register('phone', { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          {errors.phone && <span className="text-red-500">Enter a valid phone number</span>}
        </div>
 {/* Checkbox */}
 <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              {...register('agree', { required: true })}
              className="form-checkbox border border-gray-300 rounded-md mr-2"
            />
            <span>I agree to the terms and conditions</span>
          </label>
          {errors.agree && <span className="text-red-500">Please agree to the terms</span>}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
