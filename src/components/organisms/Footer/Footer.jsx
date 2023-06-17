import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FooterStyles } from "./Footer.styles";
import { NumbersContext } from "src/providers/Providers";
import { ReactComponent as Trash } from "src/assets/icons/trash.svg";

const Footer = () => {
   const context = useContext(NumbersContext);
   const refresh = () => {
      context.setNumbers([]);
      window.location.toString().includes("chosen") ? "" : window.location.reload();
   };

   return (
      <FooterStyles>
         <NavLink to="/">
            <Trash onClick={() => refresh()} />
            {/* <img src="src/assets/icons/trash.svg" onClick={() => refresh()} /> */}
         </NavLink>
         <span>Löschen</span>
         <NavLink to="/chosen" className="navLink">
            {context.numbers.length >= 6 ? <button>WEITER</button> : ""}
         </NavLink>
      </FooterStyles>
   );
};

export default Footer;
