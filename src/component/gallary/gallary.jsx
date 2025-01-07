'use client';
import Image from 'next/image';
import styles from './gallary.module.css';
import  galleryImgs  from '@/data/eventData';
import { useState } from 'react';
import GallaryPopup from './gallaryPop/gallrayPop';

const Gallary = () => {

    const [open,setOpen]=useState(false);
    const [itemId,setItemId]=useState('');

    const handleImage = (id)=>{
        setOpen(true);
        setItemId(id);
    };
    

    return (
        <section className={styles.gallery}>
           {
             galleryImgs?.map((g)=><Image onClick={()=>handleImage(g.id)} src={`${g.img}`} alt={`${g.title}`} height={300} width={400} key={`${g.title}`} style={{cursor:'pointer'}}/>)
           }
           <GallaryPopup open={open} setOpen={setOpen} itemId={itemId}/>
        </section>
    );
};

export default Gallary;