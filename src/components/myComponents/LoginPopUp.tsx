import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hooks";
import { set } from "@/redux/slices/loginDetails";
import { useLogInMutation } from "@/services/authAPI";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

export function LoginPopUp() {
  const emailRef = useRef(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const [logIn] = useLogInMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    const loginDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const result = await logIn(loginDetails).unwrap();
      dispatch(set(result));
      toast.success('Login Successful')
    } catch (e) {
      toast.error(`Login Failed`)
      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      dispatch(set(undefined));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Login Here.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-Mail
            </Label>
            <Input
              id="email"
              placeholder="IIT2023249@iiita.ac.in"
              className="min-w-[260px]"
              ref={emailRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="min-w-[260px]"
              ref={passwordRef}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-green-600 px-8 hover:bg-green-400 transition-all"
            >
              Login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}
