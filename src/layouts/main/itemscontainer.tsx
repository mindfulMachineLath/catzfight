import React, { FC } from "react";
import Item from "./item";
import Stack from "@mui/material/Stack";

interface ItemsContainerProps {
  count: number;
  blueMode?: Boolean;
}
const ItemsContainer: FC<ItemsContainerProps> = ({
  count,
  blueMode = false,
  ...props
}) => {
  return (
    <Stack justifyContent="space-around" flexWrap="wrap" direction={"row"}>
      {[...Array(count).keys()].map((index) => (
        <Item key={index} blueMode={blueMode} />
      ))}
    </Stack>
  );
};

export default ItemsContainer;