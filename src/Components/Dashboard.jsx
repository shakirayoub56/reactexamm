import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {
  const [data, setData] =useState([])
useEffect(() =>{
  loadData();
},[]);
const loadData =async() =>{
  const response=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1`)
  const data=await response.json();
  setData(data.hits)
  console.log(data.hits)
}
 
  return (
    <div>

      <button data-testid="sorting-btn">Top 10 Employees</button>

       <div data-testid="employee-data">
         <EmployeeName /> 
         <EmployeeSalary />
       </div> 
       
     
    </div>
  );
};
