import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      style={{padding: "5px 10px"}}
      value={value}
      onChange={event => onChange(event.target.value)}
      >
      <option value='' hidden>{defaultValue}</option>
      {options.map(o =>
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;