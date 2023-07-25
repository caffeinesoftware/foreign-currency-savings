import { presentTerm } from "../utils";

const TermFilter = ({
  availableTerms,
  label,
  name,
  onChange,
  value,
}: {
  availableTerms: number[];
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: number | null;
}) => (
  <>
    <label htmlFor={name} className="text-white my-2 block md:ml-4">
      {label}
    </label>

    <select
      name={name}
      className="block my-2 w-full text-lg md:float-left md:ml-4 md:grow"
      value={value || ""}
      onChange={onChange}
    >
      <option>All</option>
      {availableTerms.map((term) => (
        <option key={term} value={term}>
          {presentTerm(term)}
        </option>
      ))}
    </select>
  </>
);

export default TermFilter;
