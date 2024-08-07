import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Enter your name" />
      </div>
      <div>
        <Label htmlFor="name">Email</Label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="name">Password</Label>
        <Input type="password" placeholder="Create a password" />
      </div>
      <Button size="lg" type="submit">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
