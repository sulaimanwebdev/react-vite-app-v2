import React from "react";

function Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M18.713 12H14a2 2 0 01-2-2V5.274a3 3 0 00-1.166-2.383 2.871 2.871 0 00-2.481-.534 10.969 10.969 0 00.553 21.414 11 11 0 0012.734-8.114 2.876 2.876 0 00-.533-2.485A3.055 3.055 0 0018.713 12zm.988 3.168A8.969 8.969 0 118.842 4.3a.871.871 0 01.764.172 1.016 1.016 0 01.4.806V10a4 4 0 004 4h4.712a1.041 1.041 0 01.816.4.884.884 0 01.166.768z"></path>
      <path d="M23.651 7.446A10.073 10.073 0 0016.582.372 2.1 2.1 0 0016.038.3a2 2 0 00-2.019 2V7a3 3 0 003 3h4.719a2.008 2.008 0 001.913-2.554zM21.153 8h-4.138a1 1 0 01-1-1l-.008-4.693a.048.048 0 01.025-.009h.026A8.072 8.072 0 0121.734 8z"></path>
    </svg>
  );
}

export default Icon;