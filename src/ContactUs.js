import "./ContactUs.css";
import { useState } from "react";
import Model from "./Model";

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    Salary: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const checkInput = info.name === "" || info.phone === "" || info.age === "";
  function handleFormSubmit() {
    setFormSubmitted(true);
    setErrorMsg(null);
    if (info.phone.length < 10 || info.phone.length > 12) {
      setErrorMsg("Phone range is not allowed");
    } else if (info.age < 18 || info.age > 100) {
      setErrorMsg("Age range is not allowed");
    }
  }

  return (
    <div
      class="form-container"
      onClick={() => {
        if (formSubmitted) {
          setFormSubmitted(false);
        }
      }}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Requesting a Loan</h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Name</p>
        <input
          type="text"
          name="username"
          placeholder="Please your name here"
          value={info.name}
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        <p>Welcome {info.name}</p>
        <p>Phone Number</p>
        <input
          type="number"
          maxLength="10"
          value={info.phone}
          onChange={(e) => {
            setInfo({ ...info, phone: e.target.value });
          }}
        />
        <p>Age</p>
        <input
          type="number"
          value={info.age}
          onChange={(e) => {
            setInfo({ ...info, age: e.target.value });
          }}
        />
        <p>Are you an employee?</p>
        <input
          type="checkbox"
          name="employee"
          value={info.isEmployee}
          onChange={(e) => {
            setInfo({ ...info, isEmployee: e.target.checked });
          }}
        />
        <p>Salary</p>
        <select
          name="Salary"
          value={info.Salary}
          onChange={(e) => {
            setInfo({ ...info, Salary: e.target.value });
          }}
        >
          <option value="less">less than 500$</option>
          <option value="more">more than 500$</option>
        </select>
        <br />
        <button
          className={checkInput ? "disable-btn btn" : "submit-btn btn"}
          disabled={checkInput}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      <Model isVisible={formSubmitted} errMsg={errorMsg}></Model>
    </div>
  );
}
