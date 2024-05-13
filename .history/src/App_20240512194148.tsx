import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
    </>
  );
}

export default App;
