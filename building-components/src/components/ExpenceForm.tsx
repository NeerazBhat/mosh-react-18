import { FieldValues, useForm } from "react-hook-form";
import Button from "./Button";

const ExpenceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      className="expance-tracker-form p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Enter Description</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount")}
          type="number"
          className="form-control"
          id="amount"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-control"
        >
          <option value="Milk">Milk</option>
        </select>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ExpenceForm;
