import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png";
export default function Header({ onFullMenu = () => {} }) {
  return (
    <div className="px-4 md:px-8 lg:px-32 flex items-center justify-between h-74 w-full  absolute z-20 bg-transparent">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img src={Logo} className="w-20 p-2" alt="logo" />
          </Link>
        </div>
        <div className="md:flex items-center hidden">
          <Link to="/features">
            <p className="pt-4 pb-4 ml-6 hover:text-yellow-300 cursor-pointer text-lg">
              Home
            </p>
          </Link>
          <Link to="/pricing">
            <p className="pt-4 pb-4 ml-4 hover:text-yellow-300 cursor-pointer text-lg">
              About Us
            </p>
          </Link>
          <Link to="/casestudy">
            <p className="pt-4 pb-4 ml-4 hover:text-yellow-300 cursor-pointer text-lg">
              Pages
            </p>
          </Link>
          <Link to="/about">
            <p className="pt-4 pb-4 ml-4 hover:text-yellow-300 cursor-pointer text-lg">
              Shop
            </p>
          </Link>
        </div>
      </div>
      <div className="md:flex items-center  hidden">
        <p className="pt-4 pb-4 ml-4 hover:text-yellow-300 cursor-pointer text-lg">
          Sign up
        </p>
        <p className="pt-4 pb-4 ml-4 hover:text-yellow-300 cursor-pointer text-lg">
          Sign In
        </p>
      </div>
      <MenuOutlined
        onClick={() => onFullMenu(true)}
        className="text-2xl md:hidden hover:text-main cursor-pointer text-white"
      />
    </div>
  );
}
