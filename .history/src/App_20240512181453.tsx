import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./components/ui/button";

type TreeNode = {
  value: string;
  children?: TreeNode[];
};

const renderTreeNode = (node: TreeNode, level: number = 0): JSX.Element => (
  <>
    <AccordionItem value={node.value}>
      <AccordionTrigger>{node.value}</AccordionTrigger>
      <AccordionContent>
        {node.children?.map((child, index) => (
          <div key={index} className="ml-4">
            {renderTreeNode(child, level + 1)}
          </div>
        ))}
        {level > 0 && (
          <Button onClick={() => console.log(`Clicked on ${node.value}`)}>
            {node.value}
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  </>
);

const App = () => {
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

  return (
    <div className="flex items-center justify-center h-screen">
      <Accordion type="single" collapsible className="w-full">
        {renderTreeNode(tree)}
      </Accordion>
    </div>
  );
};

export default App;
