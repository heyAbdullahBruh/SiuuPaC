"use client";

import { useEffect, useState } from 'react';
import styles from'./nav.module.css';
import ButtonC from '../ButtonTemp/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { Button } from '@mui/material';


const Navber = () => {

    const router = useRouter();


    // Navigation 
    const [navRoute,setNavRoute]=useState('');

    useEffect(() => {
        const path = window.location.pathname.split("/")[1];
        setNavRoute(path);
      }, []);

    const navAllItem = ['/', 'menu','special','event','chef','gallary','blog','contact'];

    const thisRoute = ()=>{
        switch(navRoute){
            case '/':
                return '/';
            case 'blog':
                return 'blog';
            case 'menu':
                return 'menu';
            case 'special':
                return 'special';
            case 'event':
                return 'event';
            case 'chef':
                return 'chef';
            case 'gallary':
                return 'gallary';
            case 'contact':
                return 'contact';
            default:
                return navRoute;    
        }
    };

// console.log(thisRoute());

// nav controller system 

    const [navS,setNavS]=useState('block');
    // const [navAction,setNavAction]=useState('none');

    useEffect(()=>{
        const viewportWidth = window.screen.width;
        if (viewportWidth >800) {
            setNavS('block')
        }
    },[]);
   


    return (
        <section className={styles.nav}>
            
            <section className={styles.nav1}>

                <div className={styles.navC}>

                    <p>Call: +880190328858</p>
                    <p>Open : Mon-Sat(11.00 - 23.00 )</p>

                </div>
                <div className={styles.navBook}>
                <a href={navRoute==='book-a-table'?'/start-your-event':'/book-a-table'}><ButtonC content={navRoute==='book-a-table'?'Start A Event':'Book A Table'} /></a> 

                </div>
            </section>

                <hr />

            <section className={styles.nav2}>

                <div className={styles.navlogo}>
                    <h3>Hotel<span>X</span></h3>
                </div>

                <div className={styles.navItem} style={{display:navS}}>
                        <ul>
                            {
                                navAllItem.map((route,index)=>{

                                    return (
                                        <li onClick={()=>setNavRoute(route)} key={index}>
                                            <Link href={`/${route}`} 
                                                className={
                                                `${styles.navLink} ${
                                                route===thisRoute()? styles.navActive
                                                : styles.navLink
                                              }`}>
                                                
                                                {route==='/'?'home':route}
                                            </Link>
                                        </li>
                                    )      

                                })
                            }
                        </ul>
                    </div>

                <div className={styles.navControl}>
                     {
                        navS ==='block' 
                        ? <span style={{cursor:'pointer'}} onClick={()=>setNavS('none')}> ❌ </span>  
                        :<span style={{cursor:'pointer'}} onClick={()=>setNavS('block')}> |||| </span>
                     }
                </div>

            </section>

        </section>
    );
};

export default Navber;