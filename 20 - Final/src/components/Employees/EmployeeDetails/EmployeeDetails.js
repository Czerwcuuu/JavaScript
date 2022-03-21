import React, {Component} from 'react';
import styles from './EmployeeDetails.module.css';

class EmployeeDetails extends Component{


    render()
    {
        return(
            <div className={styles.employeeDetails}>
                <div className={styles.employeeDetailsDiv}>Name: {this.props.name}</div>
                <div className={styles.employeeDetailsDiv}>Salary: {this.props.salary}</div>
                <div className={styles.employeeDetailsDiv}>Age: {this.props.age}</div>
            </div>
        )
    }


}



export default EmployeeDetails;