import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const ItemContainer = styled(Box)(({ theme }) => ({
  marginTop: "16px",
  padding: "8px",
  display: "flex",
  columnGap: "8px",
  border: "1px solid white",
  "&.blue": {
    background: "rgba(0, 0, 255, 0.2)",
  },
})) as typeof Box;

const ItemBox = styled(Box)(({ theme }) => ({
  background: "url(/static/images/item.webp)",
  backgroundSize: "100% 100%",
  position: "relative",
  "&>img": {
    transition: "width 1s ease-in-out",
    [theme.breakpoints.up("xs")]: {
      width: "90px",
      height: "130px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "120px",
      height: "170px",
    },
    [theme.breakpoints.up("md")]: {
      height: "220px",
      width: "150px",
    },
  },
  "& .content": {
    position: "absolute",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      top: "10px",
    },
    [theme.breakpoints.up("md")]: {
      top: "20px",
    },
  },
  "& .fight": {
    [theme.breakpoints.down("xs")]: {
      "& p": {
        lineHeight: "20px",
        fontSize: "16px",
      },
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("md")]: {
      "& p": {
        lineHeight: "24px",
        fontSize: "20px",
      },
      width: "70px",
      height: "70px",
    },
    [theme.breakpoints.up("md")]: {
      "& p": {
        lineHeight: "36px",
        fontSize: "28px",
      },
      width: "100px",
      height: "100px",
    },
    "& p": {
      color: "white",
      textAlign: "center",
      fontFamily: "Georgia",
      fontWeight: 900,
      letterSpacing: "0.00938em",
    },
  },
  "& .random": {
    "& p": {
      color: "white",
      textAlign: "center",
      lineHeight: 1.5,
      fontWeight: 900,
      fontFamily: "Georgia",
      letterSpacing: "0.00938em",
    },
    [theme.breakpoints.up("xs")]: {
      height: "20px",
      "& p": {
        fontSize: "10px",
      },
    },
    [theme.breakpoints.up("sm")]: {
      height: "28px",
      "& p": {
        fontSize: "12px",
      },
    },
    [theme.breakpoints.up("md")]: {
      height: "46px",
      "& p": {
        fontSize: "14px",
      },
    },
  },
})) as typeof Box;

const FightButton = styled(Button)(({ theme }) => ({
  padding: "6px 8px",
  minWidth: "64px",
  display: "inline-flex",
  position: "relative",
  width: "80%",
  "& p": {
    position: "absolute",
    textAlign: "center",
    color: "yellow",
    fontSize: "14px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  },
})) as typeof Button;

const Item: FC = () => {
  return (
    <ItemBox>
      <img src="/static/images/item.webp" alt="fight" />
      <Stack direction="column" alignItems="center" className="content">
        <Stack className="fight" alignItems="center">
          <Typography component={"p"}>Let's Fight</Typography>
        </Stack>
        <Box className="random" alignItems={"center"}>
          <Typography component={"p"}>Random</Typography>
        </Box>
        <FightButton>
          <img src="/static/images/fight.png" alt="fight" width="100%" />
          <Typography component={"p"}>FIGHT</Typography>
        </FightButton>
      </Stack>
    </ItemBox>
  );
};

interface ItemComponentProps {
  blueMode?: Boolean;
}

const ItemComponent: FC<ItemComponentProps> = ({ blueMode = false }) => {
  return (
    <ItemContainer className={blueMode ? "blue" : ""}>
      <Item />
      <Item />
    </ItemContainer>
  );
};

export default ItemComponent;
