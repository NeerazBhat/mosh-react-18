const ListGroup = () => {
  const listData = ["Nepal", "India", "China"];
  return (
    <ul className="list-group">
      {listData.map((item, idx) => (
        <li key={idx} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
