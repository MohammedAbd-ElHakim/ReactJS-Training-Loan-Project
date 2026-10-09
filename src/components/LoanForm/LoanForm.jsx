import { useState } from "react";

import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import ResultPopup from "../ResultPopup/ResultPopup";

import { validateLoanForm } from "../../validation/loanValidation";

function LoanForm() {
  /*
   * formData contains all values entered by the user.
   *
   * We keep the whole form in one state object because the fields
   * belong to the same piece of data: the loan application.
   *
   * All values start as empty strings because form inputs return
   * their values as strings by default.
   */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    employment: "",
    salary: "",
  });

  /*
   * errors stores validation errors.
   *
   * Example:
   * {
   *   phone: "Phone number must contain 10 to 12 digits."
   * }
   *
   * An empty object means there are no validation errors.
   */
  const [errors, setErrors] = useState({});

  /*
   * popup stores whether the result popup should be visible.
   *
   * We keep the popup state inside LoanForm because LoanForm decides
   * whether the submitted application succeeded or failed.
   */
  const [popup, setPopup] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  /*
   * This function handles all form fields.
   *
   * Instead of creating a separate function for every input,
   * we use the "name" attribute to know which field changed.
   *
   * For example:
   * name="phone"  -> formData.phone
   * name="age"    -> formData.age
   */
  function handleChange(event) {
    const { name, value } = event.target;

    /*
     * The spread operator keeps the existing form values
     * and changes only the field that the user edited.
     */
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  /*
   * Form submission is handled here instead of relying on the
   * browser's default form submission.
   *
   * preventDefault() stops the browser from refreshing the page.
   */
  function handleSubmit(event) {
    event.preventDefault();

    /*
     * Validation is kept in a separate file so this component
     * doesn't need to know the individual validation rules.
     *
     * validateLoanForm() returns an object containing any errors.
     */
    const validationErrors = validateLoanForm(formData);

    setErrors(validationErrors);

    /*
     * If the errors object contains any properties,
     * the form is invalid and we stop here.
     */
    if (Object.keys(validationErrors).length > 0) {
      setPopup({
        isOpen: true,
        type: "error",
        message: "Please check the form and correct the invalid fields.",
      });

      return;
    }

    /*
     * If we reach this point, validation passed.
     *
     * In a real application this is where we could send
     * formData to a backend API using POST.
     */
    setPopup({
      isOpen: true,
      type: "success",
      message: "Your loan application has been submitted successfully.",
    });
  }

  /*
   * The form cannot be submitted until all required fields
   * contain a value.
   *
   * This is different from validation:
   *
   * - isFormComplete -> controls whether Submit is enabled.
   * - validateLoanForm -> checks whether the entered values are valid.
   */
  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Loan Application</h1>

        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
        />

        <InputField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
        />

        <SelectField
          label="Employment Status"
          name="employment"
          value={formData.employment}
          onChange={handleChange}
          options={[
            { value: "employed", label: "Employed" },
            { value: "self-employed", label: "Self Employed" },
            { value: "unemployed", label: "Unemployed" },
          ]}
        />

        <SelectField
          label="Salary Level"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />

        {/*
         * The button is disabled when one or more required fields
         * are still empty.
         */}
        <button type="submit" disabled={!isFormComplete}>
          Submit Application
        </button>
      </form>

      {/*
       * ResultPopup is rendered only when isOpen is true.
       *
       * This is React's conditional rendering:
       * condition && <Component />
       */}
      {popup.isOpen && (
        <ResultPopup
          type={popup.type}
          message={popup.message}
          onClose={() =>
            setPopup((previousPopup) => ({
              ...previousPopup,
              isOpen: false,
            }))
          }
        />
      )}

      {/*
       * We display validation errors separately from the popup.
       *
       * Object.entries() converts:
       *
       * { phone: "Invalid phone" }
       *
       * into:
       *
       * [["phone", "Invalid phone"]]
       *
       * which allows us to render each error with map().
       */}
      {Object.entries(errors).length > 0 && (
        <div>
          <h3>Please correct the following:</h3>

          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default LoanForm;
