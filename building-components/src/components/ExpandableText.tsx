import { useState } from "react";
import Button from "./Button";

interface IExpandableText {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 50 }: IExpandableText) => {
  const [expand, setExpand] = useState(false);
  if (children.length <= maxChar) return <p>{children}</p>;
  return (
    <div>
      {expand ? children : children.slice(0, maxChar) + "..."}
      <Button className="btn-sm ms-2" onClick={() => setExpand(!expand)}>
        {expand ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
