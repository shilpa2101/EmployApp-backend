import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [datas,changedata]=useState(
        [
            {
                "name":"shilpa", 
                "empid":12,
                "dob":"21-2-2001",
                "email":"shilpa@gmail.com"
                
            },
            {
                "name":"Swathi", 
                "empid":"18",
                "dob":"14-12-2005",
                "email":"swa@gmail.com"
                
            }
        ]
           
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
        <th>Serial no</th>
      <th scope="col">Name</th>
      <th scope="col">Emp id</th>
      <th scope="col">D-O-B</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  {datas.map(
    (value,index)=>{
        return <tbody>
                <tr>
                  <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.empid}</td>
                <td>{value.dob}</td>
                <td>{value.email}</td>
                </tr>
            
            </tbody>
    }
  )}
  
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View