import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./components/ui/button";

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

function mapTreeNodeToAccordion(tree: TreeNode) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {tree.children?.map((child, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{child.value}</AccordionTrigger>
          <AccordionContent>
            {child.children?.map((grandchild, subIndex) => (
              <Button
                onClick={() => console.log(`${index} father`)}
                key={subIndex}
              >
                {grandchild.value}
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {mapTreeNodeToAccordion(tree)}
    </div>
  );
}

export default App;
