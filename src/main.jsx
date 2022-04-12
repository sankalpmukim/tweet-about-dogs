import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MediaQueryReact from "media-query-react";
import App from "./App";
const screenSize = {
  mobile: {
    // custom device name
    minWidth: 320,
    maxWidth: 480,
  },
  mobileLandscape: {
    minWidth: 481,
    maxWidth: 767,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1024,
  },
  desktop: {
    minWidth: 1025,
    maxWidth: 2500,
  },
};
const MediaQuery = ({ children }) => {
  return (
    <MediaQueryReact mediaQueries={screenSize}>{children}</MediaQueryReact>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <MediaQuery>
      <App />
    </MediaQuery>
  </React.StrictMode>,
  document.getElementById("root")
);
