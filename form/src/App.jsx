import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.username = "This is not a valid email!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    }
    return errors;
  };

  return (
    <>
      {/* <pre>{JSON.stringify(formValues)}</pre> */}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <h1>Login Form</h1>
            <div className="username">
              <label>Name: </label>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>{formErrors.username}</p>

            <div className="email">
              <label>Email: </label>
              <div className="input">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>{formErrors.email}</p>
            <div className="password">
              <label>Password: </label>
              <div className="input">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>{formErrors.password}</p>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
