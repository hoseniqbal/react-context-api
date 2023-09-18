import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const HeaderMenu = () =>{
  return(
    <section className="py-2.5" style={{backgroundColor: '#ad838394'}}>
      <div className="container mx-auto flex items-center">
        <div className="w-1/5">
          <img src=".././src/assets/tokyo.png" alt="logo" width="200px"/>
        </div>
        <div className="w-4/5 flex justify-end">
          <ul className="flex">
            <li className="px-2.5 font-semibold">Home</li>
            <li className="px-2.5 font-semibold">About</li>
            <li className="px-2.5 font-semibold">Blog</li>
            <li className="px-2.5 font-semibold">Contact</li>
          </ul>
          <span className="ml-2.5">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>0</span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeaderMenu;