"use client";
import { useState } from "react";
import Parse from "parse";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const doUserRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); // Prevent default form submit behavior
    try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      const createdUser: Parse.User = await user.signUp();
      toast.success(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      router.push("/auth/login");
    } catch (error: any) {
      toast.error(`Error! ${error.toString()}`);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-background">
      <form
        onSubmit={doUserRegistration}
        className="w-full max-w-sm bg-card p-8 rounded-lg shadow"
      >
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default Signup;
