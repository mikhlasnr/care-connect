# Product Source (Distributor) by Mengantar

Welcome to the Documentation for the Project Product Source (Distributor) by Mengantar! This documentation focuses on the project's integration with Next.js, TypeScript, Bootstrap, Redux, clean architecture, and the use of Storybook for component development and documentation.

## Introduction

This documentation repository provides comprehensive information about our project, highlighting its key technologies, folder structure, styling options, and the use of Storybook for component development.

This repository is built with:

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Bootstrap
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit ex. MPS-01_init-project

#### Recommendation Requirements

- node >= `v18.19.0` < `v21`
- npm `10.2.3`

## Storybook for Component Development

We use Storybook to facilitate component development, documentation, and testing. Storybook provides a dedicated environment for building and showcasing UI components in isolation.

### Key Benefits of Storybook

- Develop and test UI components in isolation.
- Document component usage with examples and descriptions.
- Simplify collaboration among developers, designers, and stakeholders.
- Test components with different data states and props.

To run Storybook locally, follow our [Storybook Setup Guide](/storybook-setup.md).

## Technical Details

### 1. Technologies Used

- [Next.js](https://nextjs.org) for building the project.
- [TypeScript](https://www.typescriptlang.org) for type-safe development.
- [SCSS (Sass)](https://sass-lang.com), and [Storybook](https://storybook.js.org) for component development and documentation.

### 2. Running the Project Locally

To run the project locally on your development machine without using a Bash shell, follow these steps:

1. Clone the project repository to your local machine using GitHub Desktop or any Git client.

2. Navigate to the project directory using your file explorer.

3. Install project dependencies:

   - If you're using npm:

     - Double-click the `package.json` file to open it in your default code editor.
     - In your code editor, locate the terminal or console.
     - Run the following command:

       ```shell
       npm install
       ```

   - If you're using yarn:

     - Double-click the `package.json` file to open it in your default code editor.
     - In your code editor, locate the terminal or console.
     - Run the following command:

       ```shell
       yarn install
       ```

4. Start the development server:

   - If you're using npm:

     - In your code editor, locate the terminal or console.
     - Run the following command:

       ```shell
       npm run dev
       ```

   - If you're using yarn:

     - In your code editor, locate the terminal or console.
     - Run the following command:

       ```shell
       yarn dev
       ```

5. Open your web browser and access the project at [http://localhost:3000](http://localhost:3000).

Now you can explore and interact with the project locally on your machine.

## **Coding Conventions**

### **General Practices**

- **Readable Code**: Write clear, understandable code; avoid unnecessary complexity.
- **Commenting**: Use comments judiciously to explain the 'why' behind non-obvious code.
- **DRY Principle**: Avoid duplication. Reuse code through components and utility functions.

### **JavaScript/React**

- **Function Components**: Use function components with hooks.
- **File Naming**: React components in **`PascalCase`**, others in **`camelCase`**.

### **Redux**

- Use Redux Toolkit for setting up store and reducers.
- Organize state management into slices.
- Action names in **`camelCase`**.

### **CSS/SASS**

- Use BEM (Block Element Modifier) for class naming: **`.block__element--modifier`**.
- Component-level styles with CSS Modules: **`[ComponentName].module.scss`**.
- Bootstrap variables to be overridden in **`_variables.scss`**.
