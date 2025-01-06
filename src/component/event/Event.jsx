'use client';
import { useEffect, useState } from 'react';
import styles from './event.module.css';
import { restaurantEvents } from '@/data/eventData';
import Link from 'next/link';
import ButtonC from '../ButtonTemp/Button';

const Events = () => {

 const [currIndex, setCurrIndex] =useState(0);

//  const [eventItemId,setEventeventItemId]=useState(0);

  useEffect(() => {
         const interval = setInterval(() => {
           setCurrIndex((prevIndex) => {
             if (prevIndex >= restaurantEvents.length - 1) {
               return 0; // Loop back to the first slide
             }
             return prevIndex + 1; // Go to the next slide
           });
         }, 6000); // Change slide every second
       
         return () => clearInterval(interval); // Cleanup the interval on unmount or dependency change
       }, [restaurantEvents.length]);

  const {eventName,description,itemsIncluded,price,eventImage}=restaurantEvents[currIndex];  

    return (
        <section className={styles.events}>
           <div className={styles.eventCont}>
                <div className={styles.eventHead}>
                    <h2>Events</h2>
                    <p>Our Populer <span>Events</span> </p>
                </div>

               <div className={styles.eventSec}>

                  <div className={styles.eventUp}>
                     <div className={styles.eventImg}>
                        <img src={eventImage} alt={eventName}/>
                     </div>
                     
                     <div className={styles.eventInfo}>
                        <h4>${price}</h4>
                        <h3>{eventName}</h3>
                        <div className={styles.eventItem}>
                            <h5>Event Items: </h5>
                            <ul>
                                {
                                    itemsIncluded?.map((i,index)=><li key={index}>{i}</li>)
                                }
                            </ul>
                        </div>
                         <p>{description}</p>
                     </div>
                  </div>

                  <div className={styles.eventControl}>
                        {
                            restaurantEvents.map((s,sidnex)=><span style={{color:'blue',cursor:'pointer'}} onClick={()=>setCurrIndex(sidnex)} key={sidnex}>{currIndex===sidnex ? '🟢' :'⚪️'}</span>)
                        }
                  </div>

                 <div style={{margin:'2rem 0'}}>
                    <Link href={'/start-a-event'}><ButtonC content={'Start A Event'}/></Link>
                 </div>

               </div>
           </div>
        </section>
    );
};

export default Events;