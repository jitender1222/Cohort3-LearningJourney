import { useState } from "react";
import "../App.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [petType, setPetType] = useState("");
  const [yourName, setYourName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User details:", { name, email, petType, yourName, contact });
  };

  return (
    <div className="forms">
      <form className="inner-form" onSubmit={handleSubmit}>
        <label>
          Pet Name
          <input
            placeholder="pet name ..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Pet Type
          <input
            placeholder="cat,dog etc..."
            type="text"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
          />
        </label>
        <label>
          Your Name
          <input
            placeholder="your name ..."
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            placeholder="your@email..."
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contact
          <input
            placeholder="91xxxxxx"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <div className="btn-div">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn">Go To Table</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
