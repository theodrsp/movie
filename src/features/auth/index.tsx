import React, {FormEvent, useState} from "react";

import { postLogin } from "../../services/auth/api";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
        username,
        password,
    };

    try {
        const response = await postLogin(payload);
        localStorage.setItem("token", response?.token as string);
        navigate("/");
        
    } catch (error){
        console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen gap-2">
      <label className="my-3">Authentication</label>
      
      <input type="text" className="border border-gray-300 rounded-sm"
      onChange={(e) => setUsername(e.target.value)}
      />
      <input 
      type="password" 
      className="border border-gray-300 rounded-sm" 
      onChange={(e) => setPassword(e.target.value)} 
      
      />
      <button type="submit" className="bg-black text-white rounded-md py-1 px-5 my-3">Login</button>
    </form>
  );
};

export default Authentication;
