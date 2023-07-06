import { useState } from "react";

interface ListGroupProps {
  title: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ title, items, onSelectItem }: ListGroupProps) => {
  const [activeList, setActiveList] = useState(-1);

  return (
    <>
      <h3>{title}</h3>
      {items.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`list-group-item ${activeList === idx && "active"}`}
              onClick={() => {
                setActiveList(idx);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
