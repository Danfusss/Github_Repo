import { useEffect, useState } from "react";

import { Box, TextField, Typography } from "@mui/material";

import RepositoriesList from "../RepositoryList";
import CopyButton from "../CopyButton";
import FavoritesRepositoryList from "../FavoritesRepositoryList";
import fetchRepositories from "../../api/searchProject";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchRepositories(query, setRepositories);
  }, [query]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Box
      width={"95vw"}
      height={"95vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box width={"25vw"} display={"flex"} justifyContent={"space-between"}>
        <TextField
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Введите название проектов"
        />
        <CopyButton text={query} />
      </Box>
      <Box width={"60vw"} display={"flex"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography>{"Список репозиториев"}</Typography>
          <RepositoriesList repositories={repositories} />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography marginLeft={"2rem"}>
            {"Список понравившихся репозиториев"}
          </Typography>
          <FavoritesRepositoryList />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
