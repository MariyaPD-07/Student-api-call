import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import axios from 'axios'

const ViewStudent = () => {
    const[StudentData,changeStudentData]=useState(
      {"status":"success","data":[]}
    )

const fetchData=()=>{
    axios.get("http://18.144.111.41/view_all_students.php").then(
        (response)=>{
            changeStudentData(response.data)

        }
    ).catch()
}

useEffect(()=>{fetchData()},[])
  return (
    <div>
        <StudentNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
   
             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Roll no</th>
      <th scope="col">Admission No</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
    {StudentData.data.map(
    (value,index)=>{
        return(
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.roll_number}</td>
      <td>{value.admission_number}</td>
      <td>{value.college}</td>
    </tr>
   
        )}
   )}
  </tbody>
</table>

    </div>
        
   
</div>

        </div>
    </div>
</div>

    </div>
  
)
}

export default ViewStudent