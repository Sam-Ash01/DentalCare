import { useState,useEffect } from 'react';
import './../../Component/Style.css'
function Dentalform() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  useEffect(() => {
    // Get the current user's profile data
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => {
        setUsername(data.username);
        setEmail(data.email);
      })
      .catch(error => setError(error));
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   try {
  //     // Update the user's profile data
  //     const response = await fetch('/api/profile', {
  //       method: 'PATCH',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, email, password }),
  //     });
  //     const data = await response.json();
  //     setUsername(data.username);
  //     setEmail(data.email);
  //     setPassword('');
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     setLoading(false);
  //   }
  // };
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
  const handleSubmit = async (event) => {
    // console.log(email,password);
    event.preventDefault();
    const res = await  fetch('http://localhost:5000/api/auth/register',{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
          // fullName:(formData.firstName.toString() + "" + formData.lastName.toString()),
          // email: formData.email, 
          // password: formData.password,
          // confirmPassword:formData.confirmPassword,
          // phone:formData.phoneNumber,
          // role:'doctor'
        })})
          console.log(res,'res');
          if(res.ok){
            console.log(res.ok)
            const data = await res.json()
            console.log(data.token,'token');
            // const token = data.token
            // setToken(token)
            console.log(data,'data');
            alert('success!')
            // navigate('/Dentalform')
          }
}

  
  return (
  <div className="container mx-auto p-4 flex flex-row-reverse justify-between ">
    <div className='mw50 flex justify-center items-center mb-6'>
        <img
            className=" w-1/2 h-1/2 "
            src={'./About2.png'}
            alt="About Hero Image"
          />
    </div>
    <div className=" flex justify-start flex-col w-full w100per">
      <h1 className="text-3xl font-bold text-center mb-4">
        We Almost Done!
      </h1>
      <p className="text-center mb-6">
        Let's get you all set up so you can access your personal account.
      </p>
      <form onSubmit={handleSubmit} className=" mx-auto">
        <div className="flex flex-wrap">
          <div className="m-5">
            <label htmlFor="university" className="block text-gray-700 font-bold mb-2">
              University
            </label>
            <select
              id="university"
              className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={university}
              onChange={handleUniversityChange}
            >
              <option value="">Select University</option>
              <option value="Damascus University">Damascus University</option>
              {/* Add more university options here */}
            </select>
            </div>
            <div className="m-5">
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
            <div className="m-5">
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
        </div>

        <div className="mb-4">
          <label htmlFor="workDays" className="block text-gray-700 font-bold mb-2">
            Work Days
          </label>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '11:00AM')}
              >
                Sun
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={` borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sun['03:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sun', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '11:00AM')}
              >
                Mon
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.mon['03:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('mon', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '11:00AM')}
              >
                Tue
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.tue['03:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('tue', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '11:00AM')}
              >
                Wed
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.wed['03:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('wed', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '11:00AM')}
              >
                Thu
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.thu['03:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('thu', '03:00PM')}
              >
                03:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                // onClick={() => handleWorkDayChange('sat', '11:00AM')}
              >
                Sat
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['11:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '11:00AM')}
              >
                11:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['12:00AM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '12:00AM')}
              >
                12:00AM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['01:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '01:00PM')}
              >
                01:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['02:00PM'] ? 'blueden borderbluedent' : ''
                }`}
                onClick={() => handleWorkDayChange('sat', '02:00PM')}
              >
                02:00PM
              </button>
            </div>
            <div className="col-span-1">
              <button
                className={`borderbluedenthover bluedenhover  text-gray-700 border border-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  workDays.sat['03:00PM'] ? 'blueden borderbluedent' : ''
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
          className="bgblueden  bgbluedenhover1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Create account
        </button>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="blueden bluedenhover1">
            Login
          </a>
        </p>
      </form>
    </div>
      
    </div>
  );
}

export default Dentalform;
