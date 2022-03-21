import React from "react";
import "./App.css";
import Employees from "../components/Employees/Employees";
import axios from 'axios';
import EmployeeDetails from "../components/Employees/EmployeeDetails/EmployeeDetails";

class App extends React.Component {

  state = {
    employees: [],
    selectedEmployee: null,
  }

  componentDidMount(){

    axios.get('http://dummy.restapiexample.com/api/v1/employees',null).then(response => {
      //const firstTenEmployees = response.data.slice(0,10);

      const employees = response.data;;
      this.setState({employees: employees.data});
    });
  }

  showSelectedEmployeeHandler = (id) => {
    console.log("Employee ID:"+id);
    axios.get("http://dummy.restapiexample.com/api/v1/employee/"+id).then(
      response => {
        console.log(response.data);
        this.setState({selectedEmployee: response.data});
      }
    )
  }

  saveEmployeeHandler = () => {
    const employeeToSave = {
      name: "Maria",
      salary: 1200,
      age: 13
    }

    axios.post('http://dummy.restapiexample.com/api/v1/create',employeeToSave).then(response =>{
      console.log(response);
    });
  }

  render() {   

    let selectedEmployee = null;

    if(this.state.selectedEmployee !== null){
      console.log(this.state.selectedEmployee);
      selectedEmployee = <EmployeeDetails name = {this.state.selectedEmployee.data.employee_name} age = {this.state.selectedEmployee.data.employee_age} salary = {this.state.selectedEmployee.data.employee_salary}/>
    }

    return (
      <div className="App">
        {selectedEmployee}
        <h1>Employees</h1>
        <Employees employees = {this.state.employees} showSelectedEmployee={this.showSelectedEmployeeHandler}/>
        <button onClick={this.saveEmployeeHandler} className="UpdateButton">Save Employee</button>
      </div>
    );
  }
}

export default App;
