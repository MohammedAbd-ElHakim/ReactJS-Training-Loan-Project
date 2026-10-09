export function validateLoanForm(formData) {
  const errors = {};

  // Name is required.
  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  }

  // Phone must contain only digits and be between 10 and 12 digits.
  if (!/^\d{10,12}$/.test(formData.phone)) {
    errors.phone = "Phone number must contain 10 to 12 digits.";
  }

  // Convert the input value from string to number before validating the range.
  const age = Number(formData.age);

  if (!Number.isInteger(age) || age < 18 || age > 100) {
    errors.age = "Age must be between 18 and 100.";
  }

  // Both select fields are required.
  if (!formData.employment) {
    errors.employment = "Employment status is required.";
  }

  if (!formData.salary) {
    errors.salary = "Salary level is required.";
  }

  return errors;
}
