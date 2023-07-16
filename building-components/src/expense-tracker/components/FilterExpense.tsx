import expenseCategory from "../category";

interface IFilterExpense {
  onSelectCategory: (category: string) => void;
}

const FilterExpense = ({ onSelectCategory }: IFilterExpense) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {expenseCategory.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterExpense;
