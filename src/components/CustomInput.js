import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, value, onBlur, className } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default CustomInput;
