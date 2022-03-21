import React, {Component} from 'react';
import styles from './Employees.module.css';
import Employee from './Employee/Employee';

class Employees extends Component{
    
    render(){

        const employees = this.props.employees.map((employee, index) => {
            return (<Employee key={employee.id} name={employee.employee_name} id = {employee.id} showSelectedEmployee={this.props.showSelectedEmployee}/>);
        });

        return(
            <div className={styles.employees}> {employees} </div>
        )

    }

}

export default Employees;