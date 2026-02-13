import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";

export default { title: "Navigation/SidebarMenu", component: SidebarMenu };

export const Basic = () => {
  const [open, setOpen] = useState(true);
  return <SidebarMenu open={open} onClose={() => setOpen(false)} items={[{ label: "Home" }, { label: "About" }]} />;
};

export const Nested = () => {
  const [open, setOpen] = useState(true);
  return <SidebarMenu open={open} onClose={() => setOpen(false)} items={[{ label: "Products", subItems: [{ label: "Shoes" }, { label: "Hats" }] }]} />;
};