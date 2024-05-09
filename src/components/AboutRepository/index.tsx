import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { favoritesStore } from "../../store/favoritesStore";
import { Repository } from "../../type";

const AboutRepository = observer(() => {
  const [post, setPost] = useState<Repository | undefined>();
  const params = useParams();
  const current = params["id"];

  useEffect(() => {
    if (current) {
      const favoriteRepo = favoritesStore.getFavoriteById(current);
      setPost(favoriteRepo);
    }
  }, []);

  return (
    <Box>
      <Avatar
        sx={{ width: 100, height: 150 }}
        src={post?.owner.avatar_url}
      ></Avatar>
      <Typography>{`Название репозитория: ${post?.name}`}</Typography>
      <Typography>{`Полное имя проекта: ${post?.full_name}`}</Typography>
      <Typography>{`Описание проекта: ${post?.description}`}</Typography>
      <Typography>{`Проект создан: ${post?.created_at}`}</Typography>
      <Typography>{`Последнее обновление: ${post?.updated_at}`}</Typography>
      <Typography>{`Язык проекта: ${post?.language}`}</Typography>
    </Box>
  );
});

export default AboutRepository;
