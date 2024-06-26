import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export const dynamic = "force-dynamic";
import { InlineMath, BlockMath } from "react-katex";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const md = `
# Quadratic Equation

The quadratic equation is used to solve equations of the form:

$$
ax^2 + bx + c = 0
$$
 what do you mean

$$
bb = 0
$$


The solution is given by the equation:


DOENS"T WORK YET??
$$ ax^2 + bx + c = 0 $$ what do you mean $$ bb = 0$$


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

~~strikethrough~~

* [ ] task list
* [x] checked item
`;

function App() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      // rehypePlugins={[rehypeKatex]}
      children={md}
      components={{
        // Use h2s instead of h1s
        h1: "h2",
        // Use a component instead of hrs
        code(props) {
          console.log("props", props);
          const { children, className } = props;
          if (className === "language-math math-display") {
            return <InlineMath>{children}</InlineMath>;
          }

          return <code {...props.rest} />;
        },
      }}
    />
  );
}

export default App;
