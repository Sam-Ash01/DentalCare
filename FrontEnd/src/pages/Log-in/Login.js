import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    console.log("hi")
    event.preventDefault();
    const token = await fetch('http://localhost:4000/api/login',
    {method : 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({ email, password})}).then(res=>res.json())
    .then(
      // const token = response.data.token;
      data => {
          console.log(data)
            console.log(data.token + 'token')
            // console.log(data)
        if(data.token){
                    console.log("Login Success");
                    alert('Login successful!')
                    navigate('/home');
                }
                else{
                    alert('Incorrect password! Please try again.');
                }
})
    localStorage.setItem('token', token)
  
    // axios.post( 'http://localhost:3002/login', {email, password})
    // .then(result => {
    //     console.log(result);
    //     if(result.data === "Success"){
    //         console.log("Login Success");
    //         alert('Login successful!')
    //         navigate('/home');
    //     }
    //     else{
    //         alert('Incorrect password! Please try again.');
    //     }
    // })
    // .catch(err => console.log(err));
}
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

  return (
    <div className="flex items-center justify-start min-h-screen bg-blue-100 flexclomn">
    <div className=" flex justify-start w-full w100per">
    <img
        className=" w35pers h-screen w100per   "
        src={'./Heroleft.png'}
        alt="Hero Image"
        />
    </div>
    <div className=" flex justify-center items-center w-full">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md margintop1  ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-6">
          Hello again! You've been missed
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="block text-gray-700  mb-2  bg-white absolute top-15 left-3 px-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6 relative mt-9">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2   bg-white absolute top-15 left-3 px-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-end justify-center flex-col">
            <button
              type="submit"
              className="bgblueden bgbluedenhover1 text-white font-bold w-full py-2  rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm blueden bluedenhover1"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a
            href="#"
            className="blueden bluedenhover1"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;