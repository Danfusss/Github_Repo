import { observer } from "mobx-react-lite";

import { Box, List } from "@mui/material";

import { favoritesStore } from "../../store/favoritesStore";
import RepositoryCard from "../RepositoryCard";

const FavoritesRepositoryList = observer(() => {
  return (
    <Box>
      <List>
        {favoritesStore.favorites.map((item) => (
          <RepositoryCard key={item.id} repo={item} />
        ))}
      </List>
    </Box>
  );
});

export default FavoritesRepositoryList;
