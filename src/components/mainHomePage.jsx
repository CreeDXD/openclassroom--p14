//the form of the page form 

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/reducers/createEmployeSlice'
import { states, departments } from '../data/data';
import DatePicker from '../components/datePicker'
import InputText from '../components/inputText'
import InputSelect from './inputSelect';
import InputNumber from './inputNumber'
import Modal from '@creedxd/modalcomponent/dist/modal/index.js';

export default function MainHomePage (){
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        dateToStart: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        department: '',
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formatDates = (inputDate) =>{
        let parts = inputDate.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    const saveEmployee = () =>{     
                
            let employeeformated  = newEmployee
            employeeformated.dateOfBirth 
                ? employeeformated.dateOfBirth = formatDates(newEmployee.dateOfBirth)
                : employeeformated.dateOfBirth  =  newEmployee.dateOfBirth
            employeeformated.dateOfBirth 
                ? employeeformated.dateToStart = formatDates(newEmployee.dateToStart)
                : employeeformated.dateToStart  =  newEmployee.dateToStart

        dispatch(addEmployee(employeeformated));

        // Reset form data after saving
        setNewEmployee({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            dateToStart: '',
            street: '',
            city: '',
            state: '',
            zipcode: '',
            department: '',
        });
        setIsModalOpen(true)

    }
    
    const handleGoToEmployeList = (e) =>{
        e.preventDefault()
        navigate('/employelist')
    }

    const handleChange = (fieldName) => (e) => {  
        setNewEmployee({ ...newEmployee, [fieldName]: e.target.value});
    };

    const hanldeCloseModal =(e) =>{
        e.preventDefault()
        setIsModalOpen(false)
    }

    return(
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                    <a href="employee-list.html" onClick={handleGoToEmployeList}>View Current Employees</a>
                    <h2>Create Employee</h2>
                    <form action="#" id="create-employee">
                    <InputText
                        label="First Name"
                        value={newEmployee.firstName}
                        onChange={handleChange('firstName')}
                    />
                    <InputText
                        label="Last Name"
                        value={newEmployee.lastName}
                        onChange={handleChange('lastName')}
                    />
                    
                    <DatePicker 
                        label="Date of Birth" 
                        value={newEmployee.dateOfBirth} 
                        onChange={handleChange('dateOfBirth')}
                    />

                    <DatePicker 
                        label="Start Date" 
                        value={newEmployee.dateToStart} 
                        onChange={handleChange('dateToStart')}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <InputText 
                            label="Street"
                            value={newEmployee.street}
                            onChange={handleChange('street')}
                        />

                        <InputText 
                            label="City"
                            value={newEmployee.city}
                            onChange={handleChange('city')}
                        />

                        <InputSelect 
                            label="State"
                            value={newEmployee.state}
                            onChange={handleChange('state')}
                            options={states}
                            valueKey="abbreviation"
                            labelKey="name"
                        />
                        
                        <InputNumber 
                            label="Zip Code"
                            value={newEmployee.zipcode}
                            onChange={handleChange('zipcode')}
                        />
                    </fieldset>

                    <InputSelect
                        label="Department"
                        value={newEmployee.department}
                        onChange={handleChange('department')}
                        options={departments}
                    />
                    </form>       
                    <button className="save_button" onClick={saveEmployee}>Save</button>
                    
            </div>  
            <Modal isModalOpen={isModalOpen} hanldeCloseModal={hanldeCloseModal} modalText={"Employee Created!"}/>    
        </>
    )
}