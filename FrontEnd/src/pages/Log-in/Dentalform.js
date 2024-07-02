import { useState } from 'react';

function Dentalform() {
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState('');
  const [studentId, setStudentId] = useState('');
  const [workDays, setWorkDays] = useState({
    sun: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
    mon: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
    tue: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
    wed: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
    thu: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
    sat: {
      '11:00AM': false,
      '12:00AM': false,
      '01:00PM': false,
      '02:00PM': false,
      '03:00PM': false,
    },
  });

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleWorkDayChange = (day, time) => {
    setWorkDays((prevWorkDays) => ({
      ...prevWorkDays,
      [day]: {
        ...prevWorkDays[day],
        [time]: !prevWorkDays[day][time],
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      university,
      year,
      studentId,
      workDays,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        We Almost Done!
      </h1>
      <p className="text-center mb-6">
        Let's get you all set up so you can access your personal account.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="university" className="block text-gray-700 font-bold mb-2">
            University
          </label>
          <select
            id="university"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={university}
            onChange={handleUniversityChange}
          >
            <option value="">Select University</option>
            <option value="Damascus University">Damascus University</option>
            {/* Add more university options here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
            Year
          </label>
          <input
            type="number"
            id="year"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={year}
            onChange={handleYearChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="studentId" className="block text-gray-700 font-bold mb-2">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="workDays" className="block text-gray-700 font-bold mb-2">
            Work Days
          </label>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('sun', '11:00AM')}
              >
                Sun
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('mon', '11:00AM')}
              >
                Mon
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('tue', '11:00AM')}
              >
                Tue
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('wed', '11:00AM')}
              >
                Wed
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('thu', '11:00AM')}
              >
                Thu
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleWorkDayChange('sat', '11:00AM')}
              >
                Sat
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['11:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['12:00AM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['01:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['02:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['03:00PM'] ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Create account
        </button>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Dentalform;
