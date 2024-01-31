import React, { useState } from "react";
import ListHead from "./ListHead";
import ListItem from "./ListItem";

export default function Navbar(props) {
  const [listItem, setListItem] = useState("");
  return (
    <div>
      {!props.menu ? (
        <nav className="hidden lg:block relative">
          <div>
            <ul
              className="bg-black bg-opacity-70 p-4 rounded-sm  flex xl:justify-between items-center 
       gap-4 flex-wrap"
            >
              <ListHead title="Home" to="/" />
              <ListHead
                onclick={() => setListItem("repair")}
                title="Appliance Repairs"
              />
              <ListHead
                onclick={() => setListItem("installation")}
                title="Appliance Installation"
              />
              <ListHead
                onclick={() => setListItem("plumber")}
                title="Plumber"
              />
              <ListHead
                onclick={() => setListItem("electrician")}
                title="Electrician"
              />
              <ListHead title="IT Services" />
              <ListHead title="Services" />
              <ListHead title="Bookings" />
              <ListHead title="About" to="/about-us" />
              <ListHead title="Contact" />
            </ul>
          </div>
          {listItem === "repair" ? (
            <div className="absolute w-full">
              <ListItem title="Home" />
            </div>
          ) : (
            ""
          )}
        </nav>
      ) : (
        <nav className="lg:hidden">
          <div>
            <ul className="bg-black bg-opacity-70 p-4 rounded-sm block space-y-3">
              <ListHead title="Home" to="/" />
              <ListHead title="Appliance Repairs" />
              <ListHead title="Appliance Installation" />
              <ListHead title="Plumber" />
              <ListHead title="Electrician" />
              <ListHead title="IT Services" />
              <ListHead title="Services" />
              <ListHead title="Bookings" />
              <ListHead title="About" />
              <ListHead title="Contact" />
            </ul>
          </div>

          <div>
            <ListItem title="Home" />
          </div>
        </nav>
      )}
    </div>
  );
}
