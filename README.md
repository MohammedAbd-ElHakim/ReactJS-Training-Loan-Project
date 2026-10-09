 <p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="220" alt="React Logo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Docker-Dev%20Environment-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<h1 align="center">React Loan Application</h1>

<p align="center">
  A React.js training project demonstrating reusable components, form validation, state management, and Docker-based development.
</p>

<p align="center">
  <a href="https://github.com/MohammedAbd-ElHakim/ReactJS-Training-Loan-Project">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github" alt="GitHub Repository">
  </a>
  <img src="https://img.shields.io/badge/Status-Learning%20Project-blue?style=flat" alt="Project Status">
</p>

---

# React Loan Application

A training project built with React.js and Vite to practice reusable components, state management, form handling, input validation, and conditional rendering. The project includes a Docker-based development environment using VS Code Dev Containers.

## Overview

The Loan Application provides a form for collecting applicant information and validating the submitted data.

### Features

* Reusable React components for input fields, select fields, and result popups.
* Form state management using React's `useState` Hook.
* Centralized input validation in a separate module.
* Required-field checks before enabling form submission.
* Age validation (18–100 years).
* Phone number validation (10–12 digits).
* Conditional rendering for success and error feedback.
* Popup dismissal by clicking outside the popup or using the close button.
* Docker-based development environment with a non-root user.
* VS Code Dev Container configuration for a consistent development setup.

> **Note:** This is a training project. Form submission currently performs client-side validation and displays a simulated result. It is not connected to a backend API, database, or banking service.

## Tech Stack

* React.js
* JavaScript (ES6+)
* Vite
* HTML5
* CSS3
* Docker
* VS Code Dev Containers
* ESLint

## Project Structure

```text
ReactJS-Training-Loan-Project/
├── .devcontainer/
│   ├── Dockerfile
│   └── devcontainer.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── InputField/
│   │   │   └── InputField.jsx
│   │   ├── LoanForm/
│   │   │   └── LoanForm.jsx
│   │   ├── ResultPopup/
│   │   │   └── ResultPopup.jsx
│   │   └── SelectField/
│   │       └── SelectField.jsx
│   ├── validation/
│   │   └── loanValidation.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Run with Docker and VS Code Dev Containers

The project includes a Dockerfile and a Dev Container configuration to provide an isolated development environment.

### Prerequisites

Install the following tools:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Setup Instructions

**1. Clone the repository**

```bash
git clone https://github.com/MohammedAbd-ElHakim/ReactJS-Training-Loan-Project.git
cd ReactJS-Training-Loan-Project
```

**2. Open the project in VS Code**

```bash
code .
```

**3. Open the project inside the Dev Container**

* Make sure Docker Desktop is running.
* Install the Dev Containers extension in VS Code.
* Open the Command Palette using `Ctrl + Shift + P`.
* Select `Dev Containers: Reopen in Container`.
* Wait for VS Code to build the image and open the development environment.

**4. Install dependencies**

Open the integrated terminal inside the container and run:

```bash
npm install
```

**5. Start the Vite development server**

```bash
npm run dev -- --host 0.0.0.0
```

**6. Open the application**

Visit:

```text
http://localhost:5173
```

The development server uses port `5173`, which is configured for forwarding in `.devcontainer/devcontainer.json`.

### Docker Development Environment

The development environment is configured with:

* Node.js 22 on Debian Bookworm.
* A non-root `node` user.
* An isolated development container.
* npm cache configured inside the container workspace.
* Port `5173` exposed for the Vite development server.

The container provides the development environment; the Vite server is started separately using the command above.

## Run Locally Without Docker

If Node.js is already installed, you can also run the project directly:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Learning Objectives

This project demonstrates practical use of:

* Component-based architecture.
* Props and reusable UI components.
* State management with `useState`.
* Side-effect fundamentals with `useEffect`.
* Controlled form inputs and event handling.
* Object destructuring and the spread operator.
* Conditional rendering and list rendering with `map()`.
* Input validation and separation of responsibilities.
* Docker-based development workflows.

## Future Improvements

* Integrate a backend API for submitting applications.
* Persist applications in a database.
* Add automated tests.
* Improve accessibility and form error feedback.
* Migrate the project to Next.js to explore routing, Server and Client Components, and Route Handlers.

## Author

**Mohammed Abd Elhakim Hassan**

GitHub: [MohammedAbd-ElHakim](https://github.com/MohammedAbd-ElHakim)
