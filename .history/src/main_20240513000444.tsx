import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
// import { MDXProvider } from "@mdx-js/react";
import Hello from "./helloworld.mdx";
import mdx from "@mdx-js/rollup";

//import { mdx } from "@mdx-js/react";

const components = {
  // Define your custom components here, for example:
  h1: (props) => <em>{props.children}</em>,
  // More components can be added as needed
};

// Update the Post component to render Markdown properly
export const Post = () => {
  return `# 22222`; // Use the mdx function if you want to directly interpret strings as MDX
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MDXProvider components={components}> */}
    <Post />
    <Hello />
    <App />
    {/* </MDXProvider> */}
  </React.StrictMode>
);
