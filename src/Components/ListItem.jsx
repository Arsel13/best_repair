import React from "react";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  return (
    <ul
      className="bg-black bg-opacity-60 p-4 rounded-sm flex xl:justify-between items-center 
  gap-x-5 gap-y-3 flex-wrap mt-[1px]"
    >
      <li>
        <Link>{props.title}</Link>
      </li>
    </ul>
  );
}
