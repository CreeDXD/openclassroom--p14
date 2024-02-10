// const DatePicker = ({id, selected, onChange}) =>{
//     const formatDate = (date) => {
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`;
//     };
//     const handleInputChange = (e) => {
//         const inputDate = new Date(e.target.value);
//         onChange(id, inputDate);
//         console.log(inputDate)
//     };

//     return(
//         <>
//             <input 
//                 id={id}
//                 type="date"
//                 value={formatDate(selected)}
//                 onChange={handleInputChange}
//             />
//         </>
//     )
// }

// export default DatePicker
import React from 'react';

const DatePicker = ({ label, value, onChange }) => (
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
);

export default DatePicker;
