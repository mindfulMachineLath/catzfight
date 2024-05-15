import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Main from '../main';

// Adding responsive styling to the ImageBox
const ImageBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: "rgb(38 41 43)",
    width: '100%',
})) as typeof Box;

const ImageContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "8px 12px",
})) as typeof Box;

const HoneyTextBox = styled(Box)(({ theme }) => ({
    backgroundColor: "rgb(57 61 63)",
    paddingTop: "3px",
    paddingBottom: "3px",
    position: "relative",
    '& .blink' : {
        width: "100%", height: "60px", backgroundColor: "rgba(38, 40, 42, 0.64)", marginTop: "2px"
    }
})) as typeof Box;

const TextTypography = styled(Typography)(({ theme }) => ({
    fontSize: "48px !important",
    minWidth: "900px",
    fontFamily: "Audiowide !important",
    color: "rgb(255, 201, 14)",
    fontWeight: "700",
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "rgb(38 41 43)",
    textAlign: "center",
})) as typeof Typography;

const ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingBottom: "48px",
    marginTop: "12px",
    '& .withdraw': {
        marginRight: "24px", textAlign: "center"
    },
})) as typeof Box;

const NFTButton = styled(Button)(({ theme }) => ({
    minWidth: "64px",
    padding: "6px 16px",
    borderRadius: "4px",
    backgroundColor: "rgb(2 136 209)",
    '&:hover': {
        backgroundColor: "rgb(1, 87, 155)",
    },
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
})) as typeof Button;

const NFTTypography = styled(Typography)(({ theme }) => ({
    fontWeight: "400",
    color: "rgb(243, 155, 51)",
    paddingTop: "4px",
    paddingBottom: "4px",
    textAlign: "center",
    fontSize: "18px"
})) as typeof Typography;

const HnyTypography = styled(Typography)(({ theme }) => ({
    padding: "8px 0 8px 0",
    width: "1000px",
    color: "white",
    fontSize: "36px !important",
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Audiowide !important",
    backgroundColor: "rgba(38, 40, 42, 0.64);"
})) as typeof Typography;


const Body: React.FC = () => {
    return (
        <>
            <ImageBox>
                <ImageContainer>
                    <img
                        src="/static/1.png"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        alt="Banner Image"
                    ></img>
                </ImageContainer>
            </ImageBox>
            <HoneyTextBox>
                <TextTypography>
                    Honey Pot Jackpot: TRX
                </TextTypography>
                <ButtonBox>
                    <Box className = "withdraw">
                        <NFTButton variant="contained">
                            WITHDRAW NFTSS
                        </NFTButton>
                        <NFTTypography component="p">
                            Available NFTs: 0 NFTs
                        </NFTTypography>
                    </Box>
                    <Box className = "withdraw">
                        <NFTButton variant="contained">
                            WITHDRAW TRX
                        </NFTButton>
                        <NFTTypography component="p">
                            Available NFTs: 0 NFTs
                        </NFTTypography>
                    </Box>
                </ButtonBox>
                <Box>
                    <HnyTypography>
                        HNY left to be mined: 99,999,980
                    </HnyTypography>
                </Box>
                <Box className = "blink"/>
                <Main />
            </HoneyTextBox>
        </>
    );
}


export default Body;

