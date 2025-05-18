import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
    navigate("/experience");
  };

  return (
    <div className="md:w-full 2xl:w-[80%] mx-auto min-h-screen flex items-center bg-[url('/img/login.png')] bg-cover bg-center px-4 md:px-20">
      <div className="w-full max-w-4xl p-6 md:px-10 bg-black/50 text-white rounded-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome.</h1>
          <h2 className="text-2xl mb-2 font-bold">
            Please Login To Your Account.
          </h2>
          <p className="text-sm text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row md:items-center gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full base-sm:w-auto">
              <Input
                type="email"
                placeholder="admin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black h-10 w-full md:w-[250px] lg:w-[310px] rounded-sm border-0 focus-visible:ring-0 italic"
              />
            </div>
            <div className="w-full base-sm:w-auto">
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-black h-10 w-full md:w-[250px] lg:w-[310px] rounded-sm border-0 focus-visible:ring-0 italic"
              />
            </div>
          </div>
          <div className="w-full flex justify-center md:w-auto">
            <Button
              type="submit"
              className="bg-red-600 w-[128px] hover:bg-red-700 text-white h-10 md:w-[128px] rounded-sm cursor-pointer"
            >
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
