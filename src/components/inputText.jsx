const InputText = ({ label, value, onChange }) => { 
  return(
    <div>
      <label htmlFor={label}>{label}</label>
      <input 
      id={label} 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder={label}/>
    </div>
  )  
};

export default InputText;
