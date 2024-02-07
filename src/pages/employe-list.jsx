import { useNavigate } from "react-router-dom"

export default function EmployeList(){
    const navigate = useNavigate()
    const handleGoHome = (e) =>{
        e.preventDefault()
        navigate('/')
    }

    return(
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <a href="index.html" onClick={handleGoHome}>Home</a>
        </div>
    )
}