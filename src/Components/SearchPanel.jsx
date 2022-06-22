import React, { useState } from "react";

const SearchPanel = ({setPropsValue}) => {
  const [value, setValue] = useState()

  const onSearchItem = (event) => {
    event.preventDefault()
    setValue(event.target.value );
    setPropsValue(value)
  };

  return (
    <form>
      <input
        placeholder="search"
        onChange={onSearchItem}
        value={value}
      ></input>
    </form>
  );
};

export default SearchPanel;
