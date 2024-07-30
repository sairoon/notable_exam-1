import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-gray-800 py-3 fixed top-0">
        <div className="container flex justify-between items-center">
          <div className="w-28">
            <Link className="py-4 font-bold uppercase select-none" to="/">
              Notable
            </Link>
          </div>
          <div className="w-4/5">
            <div className="flex gap-5 justify-end uppercase font-semibold">
              <Link to="/">Home</Link>
              <Link to="/notes">Notes</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
