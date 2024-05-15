import * as React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const icons = [
    {
        item: <TwitterIcon style={{ color: 'white' }} />
    },
    {
        item: <TelegramIcon style={{ color: 'white' }} />
    },
    {
        item: <SendIcon style={{ color: 'white' }} />
    }
];

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    '&:hover': {
        backgroundColor: "rgba(38, 40, 42, 0.95)",
    },
    height : "36px",
    weight : "36px",
    borderRadius : "9px",
    margin : "2px",
})) as typeof IconButton;

export default function SocialLinks() {
    return (
        <Box sx={{ display: "flex", columnGap : "1px"}}>
            {icons.map((icon, index) => (
                <CustomIconButton>
                    {icon.item}
                </CustomIconButton>
            ))}
        </Box>
    );
}
