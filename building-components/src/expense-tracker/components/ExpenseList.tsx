import Button from "../../components/Button";

interface IExpenses {
  id: number;
  description: string;
  amount: string;
  category: string;
}

interface IExpenseList {
  expenses: IExpenses[];
  onDelete: (id: number) => void;
}
export const ExpenseList = ({ expenses, onDelete }: IExpenseList) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <Button variant="danger" onClick={() => onDelete(expense.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total :</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => parseInt(expense.amount) + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};
