import React, { useState } from "react";
import "./style.css";
const Userinputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...setUserRegistration, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id:new Date().getTime().toString()};
      console.log(records)
    setRecords([...records, newRecord]);
    console.log(records);
    setUserRegistration({ username: "", email: "", phone: ""});
  }
  return (
    <div className="container">
        <h2>User Details Form</h2>
        <hr />
      <form action=""onSubmit={handleSubmit}>
        <div>
        
          <label htmlFor="username">User Name</label>
          <input
            type="text" placeholder="Enter your Name"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text" placeholder="Enter your Email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text" placeholder="Enter your Phone"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
      <button type="submit">Submit</button>
      </form>
      <div>
        {records.map((curElem) => {
          const { id, username, email, phone} = curElem;
          return (
            <div className="showDAtaStyle" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};
export default Userinputs;