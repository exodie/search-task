import { useContext } from "react";

import { type ISearchContext, SearchContext } from ".";

export const useSearch = () => useContext<ISearchContext>(SearchContext);
