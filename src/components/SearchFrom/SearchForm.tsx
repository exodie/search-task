import { type FormEvent, useRef } from "react";
import "./styles.css";

import { useSearch } from "../../context";
import { useDebounce } from "../../tools/useDebounce";
import { getUsers } from "../../api/";

export function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setUsers } = useSearch();

  const searchHandler = async () => {
    if (!inputRef.current) return console.log("inputRef:current error");

    const currentValue = inputRef.current.value.trim();

    if (!currentValue.length) {
      console.log("!currentValue.length <= 0");

      setUsers([]);

      return;
    }

    const users = await getUsers(currentValue);

    setUsers(users);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const debounce = useDebounce(searchHandler, 250);

  return (
    <div className="searchForm">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Terry..."
          onChange={() => debounce()}
        />
      </form>
    </div>
  );
}
