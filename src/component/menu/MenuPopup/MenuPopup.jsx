import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from './menupopup.module.css';
import menuItems from '@/data/dataDb';
import ButtonC from '@/component/ButtonTemp/Button';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '@media(minWidth:1900px)':{
    p:'0 15%'
  }
};

export default function MenuPopup({open ,setOpen,itemId}) {
  
  const handleClose = () => setOpen(false);

  const router= useRouter()

  const thisItem = menuItems.find(i=>i.id===itemId);

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
            <article className={styles.itemDesc}>
                <div className={styles.itemImg}>
                    <img src={thisItem?.image} alt={thisItem?.itemName} />
                </div>
                <div className={styles.itemInfo}>
                    <h3>{thisItem?.itemName}</h3>
                    <p>{thisItem?.description}</p>
                    <h4>Price: ${thisItem?.price}</h4>
                    <p className={styles.aviableIn}>Available In : {thisItem?.times.map(t=><span key={t}>{t.toUpperCase()}</span>)}</p>

                    <div >
                        <span onClick={()=>router.push('/book-a-table')}><ButtonC content={'book a table'}/></span>
                    </div>
                </div>
                <button className={styles.itemClose} onClick={handleClose}>❌</button>
            </article>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
