"use client";
import { useState } from "react";
import Parse from "parse";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<Parse.Object | null>(null);
  const router = useRouter();

  const doUserLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please provide both username and password.");
      return;
    }

    const usernameValue: string = username;
    const passwordValue: string = password;
    try {
      const user = await Parse.User.logIn(usernameValue, passwordValue);

      toast.success(
        `Success! User ${user.getUsername()} was successfully logged in!`
      );
      const currentUser: Parse.User = await Parse.User.current();
      setUsername("");
      setPassword("");
      getCurrentUser();
      router.push("/");

      return true;
    } catch (error: any) {
      toast.error(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogout = async function (): Promise<boolean> {
    try {
      await Parse.User.logOut();
      const currentUser: Parse.User | null = await Parse.User.current();
      if (currentUser === null) {
        toast.success("Success! User was successfully logged out!");
        getCurrentUser();
        return true;
      }
    } catch (error: any) {
      toast.error(`Error! ${error.message}`);
      return false;
    }
  };

  const getCurrentUser = async function (): Promise<Parse.User | null> {
    const currentUser: Parse.User | null = await Parse.User.current();
    setCurrentUser(currentUser);
    return currentUser;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={doUserLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
