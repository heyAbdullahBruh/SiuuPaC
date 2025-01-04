import { Button, styled } from "@mui/material";
import { green } from "@mui/material/colors";


const ButtonC = ({content}) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: 'white',
        backgroundColor: '#09A709DF',
        fontSize:'1rem',
        fontWeight:500,
        '&:hover': {
          backgroundColor: '#f3fff3',
          borderRadius:'0',
          fontWeight:600,
          color:green[500],
        },
      }));

    return <ColorButton variant="contained">{content}</ColorButton>;
};

export default ButtonC;