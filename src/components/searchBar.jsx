export const SearchBar = ({ label, placeHolder, handleOnchage, ...props }) => {
  return (
    <>
      {label != "" ? <label>{label}</label> : null}
      <input
        className="form-control"
        type="text"
        placeholder={placeHolder}
        onChange={handleOnchage}
      />
    </>
  );
};

export default SearchBar;
