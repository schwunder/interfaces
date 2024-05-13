import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./components/ui/button";
import ReactMarkdown from "react-markdown";
import { remarkMath } from "remark-math";
import { texPlugin } from "@/plugins/texPlugin";
import { rehypeKatex } from "rehype-katex";

interface TreeNode {
  value: string;
  children?: TreeNode[];
}

const tree: TreeNode = {
  value: "Root",
  children: [
    {
      value: "Child 1",
      children: [{ value: "Grandchild 1" }, { value: "Grandchild 2" }],
    },
    {
      value: "Child 2",
      children: [{ value: "Grandchild 3" }, { value: "Grandchild 4" }],
    },
  ],
};

const content = `
# Markdown Features Overview

This document showcases various markdown capabilities.

## Headers
# H1 Header
## H2 Header
### H3 Header

## Lists
- Unordered list item 1
- Unordered list item 2
  - Nested item 1
  - Nested item 2

## Links
[Google](https://www.google.com)

## Images
![Alt text](https://via.placeholder.com/150)

## Code
\`\`\`javascript
console.log("Hello, world!");
\`\`\`

## Tables
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

## Blockquotes
> Blockquotes can also be nested.
>> Nested blockquote.

## Bold and Italic
**This is bold text**
*This is italic text*

## Horizontal Rule
---
`;


export const preprocessLaTeX = (content: string) => {
  // Replace block-level LaTeX delimiters \[ \] with $$ $$

  
  const blockProcessedContent = content.replace(
    /\\\[(.*?)\\\]/gs,
    (_, equation) => $$${equation}$$,
  );
  // Replace inline LaTeX delimiters \( \) with $ $
  const inlineProcessedContent = blockProcessedContent.replace(
    /\\\((.*?)\\\)/gs,
    (_, equation) => $${equation}$,
  );
  return inlineProcessedContent;
};

function mapTreeNodeToAccordionVariant(tree: TreeNode) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {tree.children?.map((child, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{child.value}</AccordionTrigger>

          {child.children?.map((grandchild, subIndex) => (
            <AccordionContent key={subIndex}>
              <Button
                onClick={() =>
                  console.log(`${index} father and ${subIndex} son`)
                }
              >
                {grandchild.value}
              </Button>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {mapTreeNodeToAccordionVariant(tree)}
      </div>
      <ReactMarkdown remarkPlugins={[remarkMath, texPlugin]} rehypePlugins={[rehypeKatex]}> {'\\[ \\something ]'} </ReactMarkdown>

    </>
  );
}

export default App;
