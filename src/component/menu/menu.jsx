'use client';

import menuItems from '@/data/dataDb';
import Image from 'next/image';
import { useState } from 'react';
import styles from './menu.module.css';
import MenuPopup from './MenuPopup/MenuPopup';

const Menu = () => {

    const [menus,setMenus]= useState(menuItems);

    const [open, setOpen] =useState(false);

    // const handleOpen = () => ;

    const[ menuSd,setMenuSd]=useState('all');

    const handleTimeFood = (timeName)=>{
        setMenuSd(timeName);
        if (timeName==="breakfast") {
            const breakfast = menuItems.filter(e=>e.times.includes(timeName));
            setMenus(breakfast);
        }else if (timeName==="lunch") {
            const lunch = menuItems.filter(e=>e.times.includes(timeName));
            setMenus(lunch);
        }else if (timeName==="dinner") {
            const dinner = menuItems.filter(e=>e.times.includes(timeName));
            setMenus(dinner);
        }else{
            setMenus(menuItems);
        };
    };

    const [itemId,setItemId]=useState('');

    const handleItemPopup=(id)=>{
        setOpen(true);
        setItemId(id);
    };

// console.log(menuPop);
    return (
        <section className={styles.Menu}>
           <aside className={styles.menuHead}>
                <h3>Menus</h3>
                <h2>Check Our Tasty <span>Menu</span></h2>
                <div className={styles.menuAct}>
                     {
                        ['all','breakfast','lunch','dinner'].map((i)=><button onClick={()=>handleTimeFood(i)}className={i===menuSd?`${styles.btnActive}`:'' } key={i}>{i}</button>)
                     }
                    <h4> Our <span>{menuSd}</span> items</h4>
                </div>
           </aside>
           <aside className={styles.menuCont}>
            {/* <button onClick={()=>setOpen(true)}>OPen</button> */}
            {
                menus.map((item)=>(
                <article className={styles.menuItem} key={item.id} onClick={()=>handleItemPopup(item.id)}>
                        <div className={styles.imageWrapper}>
                            <Image
                            src={item.image}
                            alt={item.itemName}
                            width={50}
                            height={50}
                            className={styles.image}
                            />
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.name}>{item.itemName}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <span className={styles.price}>{item.price}</span>
                </article>
            ))
            }
           </aside>

           <aside className={styles.menuitemPopup}>
            <MenuPopup open={open} setOpen={setOpen} itemId={itemId}/>
           </aside>
        </section>
    );
};

export default Menu;