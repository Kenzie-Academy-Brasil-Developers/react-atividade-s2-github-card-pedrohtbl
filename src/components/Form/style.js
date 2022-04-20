import { Box, styled } from '@mui/material';

export const CustomForm = styled(Box)`
    margin-bottom: 50px;
    width: 500px;

    .MuiButton-root{
        background-color: blueviolet;
        font-weight: 700;
        height: 50px;
        margin: 0;
        box-sizing: border-box;
        margin-left: 5px;
    }

    .MuiTextField-root .MuiInputLabel-root{
        color: white;
        
    }

    .MuiTextField-root .MuiOutlinedInput-input{
        color: white;
        height: 50px;
        box-sizing: border-box;
        width: 250px;
    }

    .MuiTextField-root .MuiOutlinedInput-notchedOutline{
        border-color: white;
    }

    @media (max-width: 600px){
        width: 300px;
        flex-wrap: wrap;

        .MuiButton-root{
        margin-top: 20px;
        }
    }
`