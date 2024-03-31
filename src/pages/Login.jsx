import { useContext, useState } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getLoginDetails = async () => {
    try {
      const response = await fetch("http://3.227.101.169:8020/api/v1/login/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email: "abc@example.com",
          phone_number: "9898989898",
          input_code: 0,
        }),
      });

      const jsonResponse = await response.json();
      if (jsonResponse?.message === "Successfully Logged in") {
        navigate("/");
      }
    } catch (err) {
      navigate("/error");
    }
  };

  const loginWithTestCred = () => {
    setUsername("trial");
    setPassword("assignment123");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-300">
      <div className="flex flex-col justify-center items-start h-80 w-fit p-8 bg-gray-200 rounded-lg">
        <h2 className="text-2xl mb-4 text-center w-full">Log In</h2>
        <label htmlFor="Email-address">Email Address :</label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="email"
          placeholder="johndoe@gmail.com"
          value={username}
          className="w-60 mb-4 p-2 border border-gray-300 rounded"
        />
        <label htmlFor="Password">Password :</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="**********"
          value={password}
          className="w-60 mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={getLoginDetails}
          className="bg-blue-500 text-white rounded-md w-full py-2"
        >
          Log In
        </button>
        <button onClick={loginWithTestCred} className="my-2 text-center w-full">
          Fill Test Credentials
        </button>
      </div>
    </div>
  );
}
