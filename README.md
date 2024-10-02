Here are the general requirements for your project:

- The project will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- You can use any of the following editors: **vi**, **vim**, **emacs**, or **Visual Studio Code**.
- Ensure that all files end with a new line.
- A **README.md** file is mandatory and should be placed at the root of your project directory.
- Your code should have the **.js** file extension.
- The **Jest Testing Framework** will be used to test your code.
- Your code will be linted using **ESLint**, following specific rules that will be provided.
- All functions must be exported.

### Setup

1. **Install NodeJS 12.11.x** in your home directory by running the following commands:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

   Verify the installation:
   ```bash
   nodejs -v  # Expected output: v12.11.1
   npm -v     # Expected output: 6.11.3
   ```

2. **Install Jest, Babel, and ESLint** in your project directory:

   - Install Jest:
     ```bash
     npm install --save-dev jest
     ```

   - Install Babel:
     ```bash
     npm install --save-dev babel-jest @babel/core @babel/preset-env
     ```

   - Install ESLint:
     ```bash
     npm install --save-dev eslint
     ```

3. **Configuration Files**

   You will need to set up the following configuration files:

   - `package.json`
   - `babel.config.js`
   - `.eslintrc.js`

4. Finally, don't forget to run `npm install` from your project folder to install all required dependencies.
