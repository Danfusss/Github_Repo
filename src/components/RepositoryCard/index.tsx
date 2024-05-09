import { FC } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { favoritesStore } from "../../store/favoritesStore";
import { Repository } from "../../type";

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ repo }) => {
  const navigate = useNavigate();
  return (
    <Box height={"23vh"}>
      <Divider
        sx={{
          width: "25vw",
          "&.MuiDivider-root": { borderColor: "black", borderWidth: "0.1px" },
        }}
      />
      <ListItem>
        <ListItemAvatar>
          <Avatar src={`${repo.owner.avatar_url}`}></Avatar>
        </ListItemAvatar>
        <Box
          onClick={() => {
            favoritesStore.addFavorite(repo);
          }}
        >
          <ListItemText secondary={`${repo.name}`} />
          <ListItemText secondary={`${repo.description}`} />
          <ListItemText
            onClick={() =>
              window.open(`https://github.com/${repo.full_name}`, "_blank")
            }
            secondary={repo.html_url}
            sx={{ cursor: "pointer" }}
          />
          <ListItemText secondary={`Число форков: ${repo.forks_count}`} />
          <ListItemText secondary={`Число старов: ${repo.stargazers_count}`} />
          <Button onClick={() => navigate(`/repositories/${repo.id}`)}>
            {"Подробнее"}
          </Button>
        </Box>
      </ListItem>
    </Box>
  );
};

export default RepositoryCard;
