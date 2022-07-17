import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 showEdit:boolean = false;
 //emp:Employee;
 emp:any;
 empList:Employee[] = [];
 public selectedName:any;

  constructor() { 
    // this.emp = {EmployeeId:101,FirstName:"Gayatri",LastName:"Jaiswal", Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com"};
    // this.empList.push(this.emp);

    
  }

  ngOnInit(): void {
  }

  employees: Employee [] = [
    { 'EmployeeId': 101, 'FirstName': 'Alpha', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 102, 'FirstName': 'Beta', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 103, 'FirstName': 'Gamma', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 104, 'FirstName': 'Harry', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 105, 'FirstName': 'Ray', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 106, 'FirstName': 'John', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
    { 'EmployeeId': 107, 'FirstName': 'Delta', 'LastName':"Jaiswal",Salary:5000000, DOB:new Date("Fri Dec 08 2019 07:44:57"), Email:"gayatrij1810@gmail.com" },
   
  ];

  
  // public highlightRow(emp:any) {
  //   this.selectedName = emp.EmployeeId;
  //   console.log(emp);
  // }

  // editEmp()
  // {
  //   this.showEdit = true;
  //   this.emp.Action = "true";
  // }

  // updateEmp()
  // {
  //   this.showEdit = false;
  //   this.emp.Action = "false";
  // }


}
