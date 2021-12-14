import React, {useState, useEffect} from 'react'

function Invoices() {
    const initialValues = {
    username: "",
    email: "",
    password: "",
    number: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    //const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const number = /^[0-9\b]+$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.number) {
        errors.number = "Phone number is required!";
      } else if (!number.test(values.number)) {
        errors.number = "Only numbers allowed in this field!";
      } else if (values.number.length < 10) {
        errors.number = "Phone number must be at least 10 characters!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } 
    return errors;
  };

    return (
        <div>
            <h1>Lisää uusi lasku</h1>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Uusi lasku lisätty</div>
      ) : (
        <h2>Lasku lisätään tietokantaan</h2>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form">
        <div className="field">
            <label>Price</label>
            <input
              type="text"
              name="number"
              value={formValues.number}
              onChange={handleChange}
              />+
              <p><strong>{formErrors.number}</strong></p>
            <br />
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p><strong>{formErrors.username}</strong></p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p><strong>{formErrors.email}</strong></p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
        </div>
          <p><strong>{formErrors.password}</strong></p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
        </div>
    )
}

export default Invoices
