import React from "react";

//styles
import "./Header.css";

const Header = () => {
  const string = "My Profile";
  return (
    <div className="header max-w-100 py-3 px-6 flex items-center justify-between">
      <h1 className="text-4xl">writer.ai</h1>
      <div className="flex flex-col items-center h-[3.5rem] justify-between">
        <div className="text-black">
          <ion-icon name="person" size="large"></ion-icon>
        </div>
        <p className="text-black">{string}</p>
      </div>
    </div>
  );
};

export default Header;
