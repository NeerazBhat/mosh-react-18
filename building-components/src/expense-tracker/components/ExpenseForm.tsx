import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import expenseCategory from "../category";

interface IExpenseForm {
  onSubmit: (newExpense: IFormState) => void;
}

interface IFormState {
  description: string;
  amount: string;
  category: string;
}

const ExpenseForm = ({ onSubmit }: IExpenseForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormState>();

  return (
    <form
      action=""
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="mt-1 text-danger">Enter Description</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, min: 0.01, max: 1000 })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount?.type === "required" && (
          <p className="mt-1 text-danger">Enter amount</p>
        )}
        {errors.amount?.type === "min" && (
          <p className="mt-1 text-danger">Enter positive number</p>
        )}
        {errors.amount?.type === "max" && (
          <p className="mt-1 text-danger">More than 1000 is not acceptable</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          name="category"
          id="category"
          className="form-select"
        >
          <option value="">All category</option>
          {expenseCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="mt-1 text-danger">Select any category</p>
        )}
      </div>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ExpenseForm;
