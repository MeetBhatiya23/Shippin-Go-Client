import React from "react";

function NavbarLogo({ bg, text, border, boxText }) {
  return (
    <div
      className={`border py-[2px] px-1 flex items-center justify-between ${border}`}
    >
      <div
        className={`bg-white font-bold px-2 text-xs py-1 tracking-widest ${boxText} ${bg}`}
      >
        SHOPPIN
      </div>
      <div className={`text-white font-bold text-xs px-2  ${text}`}>GO</div>
    </div>
  );
}

export default NavbarLogo;
