// page employee with the table of the employees

import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectEmployees } from '../redux/reducers/createEmployeSlice';
import EmployeeTable from "../components/EmployeeTable";
import { columns } from '../data/data'

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
          <EmployeeTable columns={columns} data={employees}/>
          <a href="index.html" onClick={handleGoHome}>Home</a>
      </div>
  )
}