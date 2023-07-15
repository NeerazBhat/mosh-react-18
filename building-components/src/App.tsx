import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { AiFillLike } from "react-icons/ai";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";
import FilterExpense from "./expense-tracker/components/FilterExpense";
// import Form from "./components/Form";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Ram", amount: 4, category: "Nepal" },
    { id: 2, description: "Sachin", amount: 6, category: "India" },
    { id: 3, description: "David", amount: 3, category: "Nepal" },
    { id: 4, description: "Chang", amount: 5, category: "China" },
  ]);

  const listData = ["Nepal", "India", "China"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleShowLike = () => {
    setShowLike(!showLike);
  };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <main className="p-3 d-none">
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
      {/* <Form /> */}
      <div className="expense-tracker p-3">
        <div className="mb-3">
          <FilterExpense
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
