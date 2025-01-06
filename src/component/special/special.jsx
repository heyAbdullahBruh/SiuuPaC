'use client';

import { specialItem } from "@/data/dataDb";
import { useState } from "react";
import styles from './special.module.css';

const Special = () => {

    const firstItem = specialItem.find(i=>i.id==='spi1');

    const [spcItem, setSpcItem]=useState(firstItem);

    const [itemId,setItemid]=useState('spi1');

    const handleItem =(id)=>{
        setSpcItem(specialItem.find(i=>i.id===id));
        setItemid(id);
    };
    console.log(spcItem);
    return (
        <section className={styles.special}>
            <aside className={styles.spcHead}>
                <h4>Special</h4>
                <h3>Our Special <span>Items</span></h3>
                <div className={styles.spcItemAc}>
                    {
                        specialItem.map((i)=><button onClick={()=>handleItem(i.id)} key={i.id} className={i.id===itemId?`${styles.actiitem}`:'' } >{i.itemname}</button>)
                    }
                </div>
            </aside>
            <aside className={styles.spcItem}>
                <div className={styles.itemInfo}>
                    <h2>{spcItem?.itemname}</h2>
                    <h3>{spcItem?.title}</h3>
                    <p>{spcItem?.desc}</p>
                </div>
                <div className={styles.itemImg}>
                    <img src={spcItem?.img} alt={spcItem?.itemname} />
                </div>
            </aside>
        </section>
    );
};

export default Special;