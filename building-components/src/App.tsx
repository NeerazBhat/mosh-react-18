import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import ManageComponentState from "./components/ManageComponentState";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <main className="p-3">
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <span className="fw-bold">World</span>
        </Alert>
      )}
      <ListGroup
        title="Country List"
        items={listData}
        onSelectItem={handleSelectItem}
      />
      <Button
        variant="warning"
        className="mt-3"
        onClick={() => setShowAlert(true)}
      >
        Toggle Alert
      </Button>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary">Prev</Button>
        <Button onClick={() => console.log("Next page rendred")}>Next</Button>
      </div>
      <div className="message-list">
        <Message />
        <Message />
        <Message />
      </div>
      <ManageComponentState />
    </main>
  );
}

export default App;
