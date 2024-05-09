import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type DebounceFunction = (
  query: string,
  setRepositories: Dispatch<SetStateAction<never[]>>
) => Promise<void>;

function debounce(func: DebounceFunction, wait: number) {
  let timeout: number = wait;
  return function executedFunction(
    query: string,
    setRepositories: Dispatch<SetStateAction<never[]>>
  ) {
    const later = () => {
      clearTimeout(timeout);
      func(query, setRepositories);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const fetchRepositories = debounce(
  async (query: string, setRepositories: Dispatch<SetStateAction<never[]>>) => {
    if (!query) return;

    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );
      setRepositories(response.data.items);
    } catch (error) {
      console.error(error);
    }
  },
  2000
);

export default fetchRepositories;
