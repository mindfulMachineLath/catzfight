import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#6164ff",
    '&:hover': {
        backgroundColor: "#2847ee",
    },
    margin: "3px",
    padding: "2px 15px 2px 15px"
}));

const CustomizedButton: React.FC = () => {
    return (
        <Stack direction="row">
            <ColorButton variant="contained">CONNECT WALLET</ColorButton>
        </Stack>
    );
}

export default CustomizedButton;
