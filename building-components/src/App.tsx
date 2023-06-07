import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert>
        Hello <span className="fw-bold">World</span>
      </Alert>
      <ListGroup
        title="Country List"
        items={listData}
        onSelectItem={handleSelectItem}
      />
      <div className="d-flex justify-content-between mt-3 px-3">
        <Button variant="secondary">Prev</Button>
        <Button onClick={() => console.log("Next page rendred")}>Next</Button>
      </div>
    </>
  );
}

export default App;
