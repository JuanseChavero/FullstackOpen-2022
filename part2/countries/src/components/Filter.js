const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
