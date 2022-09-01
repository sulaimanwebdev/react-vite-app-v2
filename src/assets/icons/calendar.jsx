import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M19 2h-1V1a1 1 0 00-2 0v1H8V1a1 1 0 00-2 0v1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V7a5.006 5.006 0 00-5-5zM2 7a3 3 0 013-3h14a3 3 0 013 3v1H2zm17 15H5a3 3 0 01-3-3v-9h20v9a3 3 0 01-3 3z"></path>
      <circle cx="12" cy="15" r="1.5"></circle>
      <circle cx="7" cy="15" r="1.5"></circle>
      <circle cx="17" cy="15" r="1.5"></circle>
    </svg>
  );
}

export default Icon;
