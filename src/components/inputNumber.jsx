const InputNumber = ({ label, value, onChange }) => { 
    return(
      <div>
        <label htmlFor={label}>{label}</label>
        <input 
            id={label} 
            type="number" 
            value={value} 
            onChange={onChange} 
            placeholder={label}
            min="0"
        />
      </div>
    )  
  };
  
  export default InputNumber;
  