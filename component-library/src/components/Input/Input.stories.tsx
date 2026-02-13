import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Text = () => <Input placeholder="Text input" />;
export const Password = () => <Input type="password" placeholder="Password" />;
export const Clearable = () => <Input clearable placeholder="Clearable input" />;
