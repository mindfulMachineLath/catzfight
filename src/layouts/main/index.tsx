import React, { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContentPanel from "./contentpanel";
import Stack from "@mui/material/Stack";

const MainStack = styled(Stack)(({ theme }) => ({
  margin: "0px 16px 0px",
  background: "rgba(230, 239, 237, 0.1)",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
})) as typeof Stack;

const Main: FC = () => {
  return (
    <MainStack>
      <ContentPanel
        count={8}
        primary={"50 TRX Battle"}
        secondary={"1 Roll & 1 HNY"}
      />
      <ContentPanel
        count={4}
        primary={"250 TRX Battle"}
        secondary={"5 Roll & 5 HNY"}
        blueMode={true}
      />
    </MainStack>
  );
};

export default Main;
