import { FC, useState } from "react";

import copy from "clipboard-copy";
import { Button } from "@mui/material";

interface CopyButtonProps {
  text: string;
}

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button sx={{ height: "5.5vh" }} variant="contained" onClick={handleCopy}>
      {isCopied ? "Скопировано" : "Скопировать"}
    </Button>
  );
};

export default CopyButton;
