import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export const dynamic = "force-dynamic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const md = `
# Quadratic Equation

The quadratic equation is used to solve equations of the form:

$$
ax^2 + bx + c = 0
$$

where $a$, $b$, and $c$ are constants, and $a \ne 0$.

The solution is given by the equation:

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[remark-gfm](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features do not work by default.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ remark-gfm |

strikethrough

* [ ] task list
* [x] checked item
`;

function App() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      children={md}
    />
  );
}

export default App;
