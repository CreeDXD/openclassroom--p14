// input date component
import React from 'react';

const DatePicker = ({ label, value, onChange }) => {

  return(
    <div>
      <label htmlFor={label}>{label}</label>
      <input 
        id={label} 
        type="date" 
        value={value} 
        onChange={onChange} 
        placeholder={label}
      />
  </div>
  )
}
  
  

export default DatePicker;
