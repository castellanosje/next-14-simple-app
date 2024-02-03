import Link from "next/link";
import { HomeFillIcon } from '@primer/octicons-react';
import { ActiveLink } from "./active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="mr-6 flex flex-row items-center" href="/">
        <HomeFillIcon className="mr-2" /> <span>Home</span>
      </Link>
      <div className="flex flex-1" />
      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          text={navItem.text}
          path={navItem.path}
        />
      ))}
    </nav>
  );
}
