import React from "react";
import { CalendarIcon, UserIcon } from "@/components/icons";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <nav className="fixed bg-[#FEFFEC] border border-[#EEE] bottom-0 inset-x-0">
      <div className="flex justify-center items-center gap-[84px] py-2">
        <Link to="/calendar" aria-label="Calendar">
          <CalendarIcon />
        </Link>
        <Link to="/discover" aria-label="Discover">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link to="/profile" aria-label="Profile">
          <UserIcon />
        </Link>
      </div>
    </nav>
  );
};
