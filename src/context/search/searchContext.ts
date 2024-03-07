import { Dispatch, SetStateAction, createContext } from "react";

import type { User } from "types/";

export interface ISearchContext {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  errors?: {
    code: number | null;
    message: string;
  };
}

export const SearchContext = createContext<ISearchContext>({
  users: [] as User[],
  setUsers: () => {},
});
