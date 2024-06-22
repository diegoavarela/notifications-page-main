import React from "react";
import "../index.css";

function Header({ notifications }) {
  return (
    <div className="grid grid-cols-2 w-[100%]">
      <div className="flex text-left m-4">
        <h1 className="text-xl font-bold text-very-dark-blue self-center">
          Notifications
        </h1>
        <p className="text-base font-bold bg-blue text-white ml-1 pl-2 pr-2 rounded-lg align-middle">
          {notifications}
        </p>
      </div>
      <div className="flex text-right m-4 text-sm justify-end">
        <button className="bg-white text-stone-900 border-0">
          Mark all as read
        </button>
      </div>
    </div>
  );
}

export default Header;
