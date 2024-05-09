import { FC } from "react";

import { Box, List } from "@mui/material";

import RepositoryCard from "../RepositoryCard";
import { Repository } from "../../type";

interface RepositoriesListProps {
  repositories: Repository[];
}

const RepositoriesList: FC<RepositoriesListProps> = ({ repositories }) => {
  return (
    <Box>
      <List>
        {repositories.map((repo: Repository) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </List>
    </Box>
  );
};

export default RepositoriesList;
