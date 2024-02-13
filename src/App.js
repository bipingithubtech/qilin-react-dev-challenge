import React from "react";
import RegistrationForm from "./component/RegistrationForm/ResgistrationForm";
import GitHunUser from "./component/GitHubUser.js/GitHunUser";

import ThemeSwitcher from "./component/theme.js/ToogleButtonTochange";
import { ThemeProvider } from "../src/component/theme.js/ThemeContext";

const App = () => {
  return (
    <div>
      {/* <RegistrationForm/> */}
      {/* <GitHunUser /> */}
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
};

export default App;
