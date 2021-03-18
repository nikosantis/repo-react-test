import { FC } from "react";
import Layout from "../components/layout";
import logo from "../logo.svg";
import "../App.css";

import InputName from "../components/input-name";

const About: FC = () => {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <h1>About</h1>
          <InputName />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to alfnasojkfnasjln 🤮.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
};

export default About;
