import { useState } from 'react';

interface ListGroupProps {
  title: string;
  items: string[];
}

const ListGroup = ({ title, items }: ListGroupProps) => {
  const [activeList, setActiveList] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`list-group-item ${activeList === idx && 'active'}`}
              onClick={() => setActiveList(idx)}
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
