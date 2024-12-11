import { useState } from "react";
import "../App.css";
import Table from "./Table";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [petType, setPetType] = useState("");
  const [yourName, setYourName] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState({});
  const [formData, setFormData] = useState([]);

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim() || data.name.length < 3) {
      errors.name = "Minimum 4 words Required";
    }
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Not a Valid email";
    }
    if (!data.contact.trim() || data.contact.length < 10) {
      errors.contact = "Contact must be at least 10 characters.";
    }
    if (!data.yourName.trim() || data.yourName.length < 3) {
      errors.yourName = "Min length should be 3";
    }
    if (!data.petType.trim() || data.petType.length < 3) {
      errors.petType = " Min length should be 3";
    }
    console.log(errors);
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { yourName, contact, petType, name, email };
    const validateErrors = validateForm(newEntry);
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
    } else {
      setFormData([...formData, newEntry]);
      setName("");
      setEmail("");
      setContact("");
      setPetType("");
      setYourName("");
      setError({});
    }
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
          {error.name && <span className="error-message">{error.name}</span>}
        </label>
        <label>
          Pet Type
          <input
            placeholder="cat,dog etc..."
            type="text"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
          />
          {error.petType && (
            <span className="error-message">{error.petType}</span>
          )}
        </label>
        <label>
          Your Name
          <input
            placeholder="your name ..."
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
          {error.petType && (
            <span className="error-message">{error.petType}</span>
          )}
        </label>
        <label>
          Email
          <input
            placeholder="your@email..."
            type="email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <span className="error-message">{error.email}</span>}
        </label>
        <label>
          Contact
          <input
            placeholder="91xxxxxx"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {error.contact && (
            <span className="error-message">{error.contact}</span>
          )}
        </label>
        <div className="btn-div">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn">Go To Table</button>
        </div>
      </form>
      <Table data={formData} />
    </div>
  );
};

export default Form;
