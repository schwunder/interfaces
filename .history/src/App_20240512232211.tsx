// import { MDXProvider } from "@mdx-js/react";

const mdxContent = `
# Quadratic Equation

The quadratic equation is used to solve equations of the form:

\`\`\`
ax^2 + bx + c = 0
\`\`\`

where $a$, $b$, and $c$ are constants, and $a \\ne 0$.

The solution is given by the equation:

\`x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\`
`;

function App() {
  return <MDXProvider></MDXProvider>;
}

export default App;
