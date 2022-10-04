import React from 'react'

function Users({firstname, lastname, address, salary}) {
  return (
    <div>
        <p> First name: {firstname} </p>
        <p> Last name: {lastname}</p>
        <p> Address: {address}</p>
        <p> Salary: {salary}</p>
    </div>
  )
}

export default Users