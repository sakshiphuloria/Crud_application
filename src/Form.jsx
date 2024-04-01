import React, { useState } from 'react';
import axios from 'axios';
const Form =() =>{

    const [data, setData] = useState({
        name: '',
        lastName: '',
        mobile: '',
        project: ''
      });
    
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };
      const URL = '';

      const submit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${URL}/add`, data);
          console.log(response.data);
        } catch (error) {
          console.error('Error creating project:', error);
        }
      };
  return (
    <div>
     <h2>create client</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile no.</label>
          <input type="mobile" id="mobile" name="mobile" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="project">Project</label>
          <input type="text" id="mobile" name="project" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Form;

