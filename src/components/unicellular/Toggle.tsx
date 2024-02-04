import React from "react";

const Toggle = () => {
  return (
    <label
      className="inline-flex relative items-center  cursor-pointer"
      onClick={(evt) => evt.stopPropagation()}
    >
      <input
        type="checkbox"
        checked
        onClick={(evt) => evt.stopPropagation()}
        onChange={(evt) => {}}
        className="sr-only peer"
      />
      <div className="w-6 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2.5 after:w-2.5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default Toggle;
