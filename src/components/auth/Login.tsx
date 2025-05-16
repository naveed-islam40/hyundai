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
    <div className="h-[80%] flex pl-20 items-center bg-[url('/img/login.png')] bg-cover bg-center">
      <div className="w-full max-w-4xl p-6 px-10 bg-black/50 text-white">
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

        <form onSubmit={handleSubmit} className="space-y-4 flex gap-2">
          <div>
            <Input
              type="email"
              placeholder="admin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black h-10 w-[310px] rounded-sm border-0 focus-visible:ring-[0px] italic"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white text-black h-10 w-[310px] rounded-sm border-0 focus-visible:ring-[0px] italic"
            />
          </div>
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white h-10 w-[128px] rounded-sm cursor-pointer"
          >
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
}
