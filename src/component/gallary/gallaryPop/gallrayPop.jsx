import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import  galleryImgs  from '@/data/eventData';
import Image from 'next/image';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
//   overflowY:'scroll',
  p: 4,
  zIndex:'1000000',
  '@media(minWidth:1900px)':{
    p:'0 15%'
  }
};

export default function GallaryPopup({open ,setOpen,itemId}) {
  
  const handleClose = () => setOpen(false);

  const thisItem = galleryImgs.find(i=>i.id===itemId);

  console.log(thisItem);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            <article>
                <div>
                    <Image src={`${thisItem?.img}`} alt={`${thisItem?.title}`} height={500} width={700} style={{cursor:'zoom-in',padding:'1rem'}}/>
                </div>
             <button style={{backgroundColor:'#fff',padding:'3px',fontSize:'1.5rem',cursor:'pointer',border:'none',borderRadius:'50%',position:'absolute',bottom:'0',right:'50%'}} onClick={handleClose}>❌</button>
            </article>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
