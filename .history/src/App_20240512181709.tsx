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

const renderTree = (node: TreeNode, path: string = ""): JSX.Element => (
  <AccordionItem key={path}>
    <AccordionTrigger>{node.value}</AccordionTrigger>
    <AccordionContent>
      {node.children?.map((child, index) =>
        renderTree(child, `${path}/${index}`)
      )}
      <Button onClick={() => console.log(`Clicked on ${path}`)}>
        {node.value}
      </Button>
    </AccordionContent>
  </AccordionItem>
);

const App = () => (
  <div className="flex items-center justify-center h-screen">
    <Accordion type="single" collapsible className="w-full">
      {renderTree(tree)}
    </Accordion>
  </div>
);

export default App;
