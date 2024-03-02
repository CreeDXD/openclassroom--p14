// input select component

import React from 'react';

const InputSelect = ({ label, value, onChange, options, valueKey, labelKey }) => {
    return(
        <div>
            <label htmlFor={label}>{label}</label>
            <select 
                id={label}
                value={value} 
                onChange={onChange} 
                placeholder={label}
            >
                {options.map((option, index) => (
                    <option key={index} value={option[valueKey] || option}>
                        {option[labelKey] || option}
                    </option>       
                ))}
            </select>
        </div>
    )
}

export default InputSelect;
