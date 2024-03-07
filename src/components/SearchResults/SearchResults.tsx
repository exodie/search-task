import { UserCard } from "../UserCard/UserCard";

import "./style.css";

import { useSearch } from "../../context";

export function SearchResults() {
  const { users } = useSearch();

  return (
    <div className="usersList">
      {users.map((user) => (
        <div key={user.id}>
          <UserCard {...user} />
        </div>
      ))}
    </div>
  );
}
