import { useState } from "react";

const LoginPage = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [dealerCode, setDealerCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/users.json");
      const users = await response.json();

      const userMatch = users.find(
        (user: { dealerCode: string; zipCode: string }) =>
          user.dealerCode === dealerCode && user.zipCode === zipCode
      );

      if (userMatch) {
        onLoginSuccess(); // Navigate to next page/component
      } else {
        setError("Invalid dealer code or zip code.");
      }
    } catch (err) {
      setError("Failed to load user data.");
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Dealer Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block">Dealer Code</label>
          <input
            type="text"
            value={dealerCode}
            onChange={(e) => setDealerCode(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Zip Code</label>
          <input
            type="password"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
