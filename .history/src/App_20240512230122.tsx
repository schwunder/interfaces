import { MDXProvider } from "@mdx-js/react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Custom components for MDX
const components = {
  // Override the inline math component
  inlineCode: ({ children }) => {
    if (children.startsWith("$") && children.endsWith("$")) {
      return <InlineMath math={children.slice(1, -1)} />;
    }
    return <code>{children}</code>;
  },
  // Override the block math component
  code: ({ children, className }) => {
    if (className === "language-math") {
      return <BlockMath math={children.trim()} />;
    }
    return (
      <pre>
        <code className={className}>{children}</code>
      </pre>
    );
  },
};

const mdxContent = `
# Quadratic Equation

The quadratic equation is used to solve equations of the form:

\`\`\`math
ax^2 + bx + c = 0
\`\`\`

where $a$, $b$, and $c$ are constants, and $a \\ne 0$.

The solution is given by the equation:

\`$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$\`
`;

function App() {
  return (
    <MDXProvider components={components}>
      <MDXRenderer remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {mdxContent}
      </MDXRenderer>
    </MDXProvider>
  );
}

export default App;
