import React from "react";
import MDX from "@mdx-js/runtime";
// Provide custom components for markdown elements
const components = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};
// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
  Demo: (props) => <h1>This is a demo component</h1>,
};
const mdx = `
# Hello, world!
<Demo />
`;
export default mdxer = () => (
  <MDX components={components} scope={scope}>
    {mdx}
  </MDX>
);
