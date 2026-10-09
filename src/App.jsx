import "./App.css";

import LoanForm from "./components/LoanForm/LoanForm";

function App() {
  /*
   * App is the top-level component of the application.
   *
   * Its responsibility is to render the main feature.
   * The form state, validation, and popup logic remain inside LoanForm.
   */
  return (
    <main>
      <LoanForm />
    </main>
  );
}

export default App;
