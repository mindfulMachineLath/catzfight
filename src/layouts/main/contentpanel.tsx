import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ItemsContainer from "./itemscontainer";

const ContentPanel = styled(Box)(({ theme }) => ({
  "& p[class*=title]": {
    paddingTop: "24px",
    textAlign: "center",
    fontFamily: "Audiowide",
    fontWeight: 400,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
  },
  "& p.main-title.blue": {
    color: "rgb(0, 0, 200) !important",
  },
  "& p.sub-title": {
    color: "rgb(255, 201, 14)",
    padding: 0,
  },
})) as typeof Box;

interface ContentPanelComponentProps {
  count: number;
  primary: string;
  secondary: string;
  blueMode?: boolean;
}
const ContentPanelCompoenent: FC<ContentPanelComponentProps> = ({
  count,
  primary,
  secondary,
  blueMode = false,
  ...props
}) => {
  return (
    <ContentPanel>
      <Typography component="p" className={`main-title ${blueMode && "blue"}`}>
        {primary}
      </Typography>
      <Typography component="p" className="sub-title">
        ({secondary})
      </Typography>
      <ItemsContainer count={count} blueMode={blueMode} />
    </ContentPanel>
  );
};


export default ContentPanelCompoenent;