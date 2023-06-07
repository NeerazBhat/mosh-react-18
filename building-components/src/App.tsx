import ListGroup from "./components/ListGroup";

function App() {
  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        title="Country List"
        items={listData}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
