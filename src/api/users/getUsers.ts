import { User } from "types/users.type";

export const getUsers = async (query: string): Promise<User[]> => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}?q=${query}`);

    // По хорошему бы наверное использовать return после log, но тогда будет неявность в типизации :(
    if (!res.ok) {
      console.log("getUsers response is not OK");
    }

    const { users } = await res.json();

    return users;
  } catch (e) {
    throw new Error("getUsers method can`t get data from API");
  }
};
