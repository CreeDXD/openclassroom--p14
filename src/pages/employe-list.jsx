import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectEmployees } from '../redux/reducers/createEmployeSlice';

export default function EmployeList(){
    const navigate = useNavigate()
    const employees = useSelector(selectEmployees);

    const handleGoHome = (e) =>{
        e.preventDefault()
        navigate('/')
    }

    return(
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <ul>
              {employees.map((employee, index) => (
                <li key={index}>
                  {employee.firstName} 
                  {employee.lastName} 
                  {employee.dateToStart} 
                  {employee.dateOfBirth} 
                  {employee.street}
                  {employee.city}
                  {employee.state}
                  {employee.zipcode}
                  {employee.department}
                </li>
              ))}
            </ul>
            <a href="index.html" onClick={handleGoHome}>Home</a>
        </div>
    )
}