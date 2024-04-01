import React from 'react'

const Data = () => {
  return (
    
    <div>
      <h2>User Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Project</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{project.name}</td>
              <td>{project.lastName}</td>
              <td>{project.mobile}</td>
              <td>{project.project}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}
export default Data

