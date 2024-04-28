import React from "react";

const InputComponent = ({type, name , value, placeholder, onChange,labelFor ,text}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        onChange={(event) => onChange(event)}
      />
      <label
        for={labelFor}
        class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
      >
        {text}
      </label>
    </div>
  );
};

export default InputComponent;
