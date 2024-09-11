# 🌟 Project Name

This project is built using React with Vite as the build tool. It includes a dummy backend for handling login and signup functionalities, and uses ShadCN and Aceternity UI libraries for UI components and utilities.

## 📋 Prerequisites

- 🖥️ Node.js (version 14 or later)
- 📦 npm (version 6 or later)

## 🚀 Getting Started

### 1. 🌀 Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

```bash
cd backend
npm install
```

**Section 3: Frontend Setup and ShadCN/Aceternity Installation**

markdown
### 3. 🎨 Set Up the Frontend

Navigate to the frontend directory and install the required dependencies:

```bash
cd ../frontend
npm install
```

```bash
cd frontend
```


**Section 4: Running the Application**

### 5. 🏃‍♂️ Run the Application

#### Backend

To run the backend:

```bash
cd backend
npm start
```

```bash
cd ../frontend
npm run dev
```


**Section 5: Vite Plugins for React and ESLint Configuration**

### ⚙️ Vite Plugins for React

Currently, two official plugins are available for React:

- `@vitejs/plugin-react` 📦: Uses Babel for Fast Refresh.
- `@vitejs/plugin-react-swc` ⚡: Uses SWC for Fast Refresh.

### 🔍 Expanding the ESLint Configuration

If you are developing a production application, it is recommended to update the ESLint configuration to enable type-aware lint rules.

#### 🛠️ Configure the Top-Level `parserOptions` Property

Update your ESLint configuration as follows:

```javascript
// eslint.config.js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```


**Section 6: ESLint Plugin React Setup and Developer’s Note**

#### 📦 Install `eslint-plugin-react` and Update the Config

To expand the ESLint configuration for React, follow these steps:

1. Install the React plugin for ESLint:

    ```bash
    npm install eslint-plugin-react --save-dev
    ```

2. Update the ESLint configuration:

    ```javascript
    // eslint.config.js
    import react from 'eslint-plugin-react';

    export default tseslint.config({
      // Set the react version
      settings: { react: { version: '18.3' } },
      plugins: {
        // Add the react plugin
        react,
      },
      rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    });
    ```

### 📝 Developer's Note

I primarily focused on showcasing what I can do within the constraints of this project. I acknowledge that the UI is not as polished as it could be and that there is a lot of room for improvement. Due to time constraints, I was not able to give this my 100%, but I believe it still effectively demonstrates the core features and potential of the setup. 💪
