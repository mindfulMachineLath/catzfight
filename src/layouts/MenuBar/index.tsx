import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SocialLinks from './SocialLink'
import CustomizedButton from '../../components/customButton';
import Stack from '@mui/material/Stack';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        title: React.CSSProperties;
        maintitle: React.CSSProperties;
        subtitle: React.CSSProperties;
        toolbar: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        maintitle?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        toolbar?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title: true;
        maintitle: true;
        subtitle: true;
        toolbar: true;
    }
}

const theme = createTheme();

const darkTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "rgb(0, 0, 0, 1)"
        },
    },
    typography: {
        title: {
            fontWeight: '400',
            display: "flex",
            alignItems: "center",
            textDecoration: "none",

        },
        maintitle: {
            fontSize: "64px",
            color: "rgb(255, 201, 14)",
            fontFamily: 'Bree Serif',
            [theme.breakpoints.down('lg')]: {
                fontSize: "40px"
            },
            [theme.breakpoints.down('md')]: {
                fontSize: "30px"
            }
        },
        subtitle: {
            margin: "8px 0px 0px",
            color: "white",
            fontSize: "40px",
            fontFamily: 'Bree Serif',
            [theme.breakpoints.down('lg')]: {
                fontSize: "32px"
            },
            [theme.breakpoints.down('md')]: {
                display : "none"
            }
        }
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: "space-between",
                    '& .response': {
                        display: "flex", columnGap: "6px"
                    }
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: "24px 0px",
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: "auto",
                },
            },
        }
    }
});

const MenuIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: "9px",
    margin: "3px",
    color: "rgba(101, 230, 255, 0.9) !important",
    '&:hover': {
        backgroundColor: "rgba(38, 40, 42, 0.95)",
    }
})) as typeof IconButton;


const ButtonAppBar: React.FC = () => {
    return (
        <Stack>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color='primary'>
                    <Container maxWidth="xl">
                        <Toolbar className='layout'>
                            <Typography variant="title" component="a" href='/'>
                                <Typography variant='maintitle' component={"p"}>
                                    Bear Fight!
                                </Typography>
                                <Typography variant='subtitle' component={"p"}>
                                    (NFT War)
                                </Typography>
                            </Typography>
                            <Box className = "response">
                                <SocialLinks />
                                <CustomizedButton />
                                <MenuIconButton>
                                    <MenuIcon />
                                </MenuIconButton>
                            </Box>
                        </Toolbar>

                    </Container>
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}

export default ButtonAppBar;