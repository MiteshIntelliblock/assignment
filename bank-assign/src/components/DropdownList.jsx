import React from "react";

const DropdownList = ({
  options,
  selectedOption,
  onOptionChange,
  className,
}) => {
  return (
    <div style={{ maxHeight: "200px", overflow: "auto" }}>
      <select
        className={className}
        value={selectedOption}
        onChange={onOptionChange}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            style={{
              borderBottom: "1px white",
              backgroundColor: option === selectedOption ? "black" : "black",
              color: option === selectedOption ? "#52F40D" : "#52F40D",
            }}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
