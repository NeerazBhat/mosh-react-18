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
      <option value="Nepal">Nepal</option>
      <option value="India">India</option>
      <option value="China">China</option>
    </select>
  );
};

export default FilterExpense;
