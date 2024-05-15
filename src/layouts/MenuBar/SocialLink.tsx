import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';

const icons = [
    {
        item: <TwitterIcon style={{ color: 'white' }} />
    },
    {
        item: <TelegramIcon style={{ color: 'white' }} />
    },
    {
        item: <img className='icon'
            src="/static/images/discord.svg" />
    }
];


const CustomIconButton = styled(IconButton)(({ theme }) => ({
    '&:hover': {
        backgroundColor: "rgba(38, 40, 42, 0.95)",
    },
    height: "36px",
    weight: "36px",
    borderRadius: "9px",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    '& .icon': {
        padding: "0px",
        margin: '0px'
    }
})) as typeof IconButton;

export default function SocialLinks() {
    return (
        <Box sx={{ display: "flex", columnGap: "1px" }}>
            {icons.map((icon, index) => (
                <CustomIconButton>
                    {icon.item}
                </CustomIconButton>
            ))}
        </Box>
    );
}
