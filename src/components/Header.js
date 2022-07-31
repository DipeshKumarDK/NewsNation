import React from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"

function Header(props) {
  return (
    <div>
      <div
        className={`hidden lg:flex flex-row w-full fixed ${
          props.mode === "dark" ? "bg-cyan-800" : "bg-white"
        }`}
      >
        <div className="flex flex-row">
          <div
            className={`pr-4 p-4 ${
              props.mode === "dark" ? "text-white" : "text-black"
            } font-normal text-xl`}
          >
            NewsNation
          </div>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 pl-4 hover:text-slate-900`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/entertainment"
          >
            Entertainment
          </Link>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/sports"
          >
            Sports
          </Link>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/business"
          >
            Business
          </Link>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/science"
          >
            Science
          </Link>
          <Link
            className={`pr-4 ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/health"
          >
            Health
          </Link>
        </div>
        <div onClick={props.changeMode} className="bg-blue-600 p-2 mb-3 mt-3 mr-12 border-0 rounded text-white text-sm absolute right-0">
          <button>
            Change to {props.mode === "dark" ? "light" : "dark"} Mode
          </button>
        </div>
      </div>
      <div
        className={`sm:flex flex row lg:hidden w-full fixed ${
          props.mode === "dark" ? "bg-cyan-800" : "bg-white"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row">
            <GiHamburgerMenu
              className={`h-10 w-10 p-2 mb-3 mt-3 rounded-3xl mr-4 ${props.ham==="yes"?"bg-blue-400":""} wq:ml-6 ml-2`}
              onClick={props.changeHam}
            />
            <div
              className={`pr-4 sm:pl-4 pt-4 pb-4 pl-2  wq:block hidden ${
                props.mode === "dark" ? "text-white" : "text-black"
              } font-normal text-xl`}
            >
              NewsNation
            </div>
          </div>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 pl-4 hover:text-slate-900`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/entertainment"
          >
            Entertainment
          </Link>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/sports"
          >
            Sports
          </Link>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/business"
          >
            Business
          </Link>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/science"
          >
            Science
          </Link>
          <Link
            className={`pr-4 ${props.ham === "no" ? "hidden" : ""} ${
              props.mode === "dark" ? "text-white" : "text-slate-500"
            } p-4 hover:text-slate-900`}
            to="/health"
          >
            Health
          </Link>
        </div>
        <div className="bg-blue-600 p-2 mb-3 mt-3 flex flex-col justify-center sm:mr-12 mr-4 border-0 rounded text-white wq:text-sm text-xs absolute right-0">
          <button onClick={props.changeMode}>
            Change to {props.mode === "dark" ? "light" : "dark"} Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
