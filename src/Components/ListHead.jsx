import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ListHead(props) {
  const location = useLocation().pathname;
  return (
    <li>
      <Link
        to={props.to}
        onClick={props.onclick}
        className={`${
          location === props.to
            ? "border-b-2 border-b-yellow-400 text-yellow-400"
            : "border-b-2 border-b-transparent text-white"
        } hover:text-yellow-400 hover:border-b-2 p-[2px] hover:border-yellow-400 duration-200`}
      >
        {props.title}
      </Link>
    </li>
  );
}
