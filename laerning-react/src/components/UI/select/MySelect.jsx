import React from 'react';

export default function MySelect({defaultValue, options, value, onChange}) {
	return (
    <select
      style={{ 
				padding: "5px 15px", 
				color: "teal", 
				background: "transparent",
				border: "1ps solid teal"
			}}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
