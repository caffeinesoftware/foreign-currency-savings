const AmountFilter = ({
  onChange,
  value,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number | null;
}) => (
  <>
    <label htmlFor="initialDeposit" className="text-white my-2 block md:ml-4">
      Amount
    </label>

    <input
      name="initialDeposit"
      value={value || ""}
      className="block my-2 w-full text-lg ld:float-left md:ml-4 md:grow pl-5"
      onChange={onChange}
      type="number"
      min="1"
      step="1"
      placeholder="Any"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='85px'><text x='2' y='13' fill='gray' font-size='12' font-family='arial'>$</text></svg>",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5px 2px",
        backgroundSize: "auto 75%",
      }}
    />
  </>
);

export default AmountFilter;
