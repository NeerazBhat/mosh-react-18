import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { AiFillLike } from "react-icons/ai";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleShowLike = () => {
    setShowLike(!showLike);
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
      <div className="d-flex justify-content-end">
        <Button
          variant="light"
          className={`mt-4 d-flex align-items-center gap-2 ${
            showLike && "bg-dark text-white"
          } `}
          onClick={handleShowLike}
        >
          {showLike ? "Liked" : "Like"}
          <AiFillLike color={showLike && "tomato"} />
        </Button>
      </div>
    </main>
  );
}

export default App;
