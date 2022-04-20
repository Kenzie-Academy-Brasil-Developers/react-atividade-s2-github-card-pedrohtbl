import {AccordionSummary,AccordionDetails, Typography} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar } from '@mui/material';
import { CustomAccordion } from './style';

const Card = ({resposta}) =>{

    return(
        <>
        <CustomAccordion sx={{mt:'10px'}}>
            <AccordionSummary
            expandIcon={<ArrowForwardIosIcon/>}
            >   
                <Avatar alt={resposta.full_name} src={resposta.owner.avatar_url}/>
                <Typography 
                variant="body1" 
                >
                    {resposta.full_name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography variant="body1">
                    {resposta.description}
                </Typography>
            </AccordionDetails>
        </CustomAccordion>
        </>
    )
}

export default Card