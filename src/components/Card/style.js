import { styled } from '@mui/material';
import { Accordion } from '@mui/material';

export const CustomAccordion = styled(Accordion)`
    box-sizing: border-box;
    width: 100%;

    .MuiAccordionSummary-root .MuiTypography-body1 {
        height: 25px;
        margin-left: 20px;
        margin-top: 7px;
        font-weight: 700;
    }

    @media (max-width: 600px){
        width: 330px;

    }

    
`