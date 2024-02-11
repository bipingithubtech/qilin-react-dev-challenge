import React, { useEffect, useState } from "react";

const RegistrationForm = () => {
  const initialval = { email: "", password: "", confirmPassword: "" };
  const [formData, setData] = useState(initialval);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const HandleChanges = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    setError(validate(formData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      console.log("Form Data:", formData);
    }
  }, [error, formData, submit]);

  const validate = (value) => {
    const errors = {};
    const char = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (!value.email.trim()) {
      errors.email = "Email is required";
    } else if (!char.test(value.email)) {
      errors.email = "Invalid email";
    }

    if (!value.password.trim()) {
      errors.password = "Password is required";
    } else if (value.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!value.confirmPassword.trim()) {
      errors.confirmPassword = "Confirmation is required";
    } else if (value.confirmPassword.trim() !== value.password.trim()) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <>
      <div>
        <h1 className="container w-50 mt-4 mx-auto mt-7 ">Registration Form</h1>
      </div>
      {Object.keys(error).length === 0 && submit ? (
        <div className="alert alert-success">Signed in successfully</div>
      ) : (
        <p>{JSON.stringify(formData, undefined, 2)}</p>
      )}
      <form
        onSubmit={HandleSubmit}
        className="container w-50 mt-4 mx-auto mt-7 bg-light p-2"
      >
        <div className="col-sm-10">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={HandleChanges}
            className="form-control"
          />
        </div>
        <p className="text-danger">{error.email}</p>
        <div className="col-sm-10">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={HandleChanges}
            className="form-control"
          />
        </div>
        <p className="text-danger">{error.password}</p>
        <div className="col-sm-10">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={HandleChanges}
            value={formData.confirmPassword}
            className="form-control"
          />
        </div>
        <p className="text-danger">{error.confirmPassword}</p>
        <div className="offset-sm-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
