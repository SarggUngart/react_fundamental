import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value='' hidden>{defaultValue}</option>
      {options.map(o => {
        return (<option key={o.value} value={o.value}>
          {o.name}
        </option>)
      })}f
    </select>
  );
};

export default MySelect;