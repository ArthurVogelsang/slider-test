import React from "react";

function ArrowButton({
  icon,
  disabled = false,
  onClick = () => { }
}) {

  return (
    <button
      disabled={disabled}
      className='w-8 h-8 bg-gray-500 disabled:opacity-50 flex justify-center items-center rounded-full'
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ArrowButton;
