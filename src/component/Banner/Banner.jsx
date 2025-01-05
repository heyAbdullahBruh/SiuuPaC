'use client';
import { useEffect, useState } from 'react';
import styles from './banner.module.css';
import Link from 'next/link';
import ButtonC from '../ButtonTemp/Button';


const Banner = () => {
    
    const slides= [
        {
            img:'https://i.ibb.co.com/98bSQHM/heroImg1.jpg',
            title:'Delicious Restaurant',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            img:'https://i.ibb.co.com/RHmqzZW/heroImg2.jpg',
            title:'At vero eos et accusamus',
            desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.'
        },
        {
            img:'https://i.ibb.co.com/YDYF31y/heroImg3.jpg',
            title:'Temporibus autem quibusdam',
            desc:'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.'
        },
    ]


    const [currIndes, setCurrIndex] =useState(0);



    const slideStyle ={
        width:'100%',
        height:'95vh',
        // borderRadius:'1rem',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currIndes].img})`,
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        transition: 'all 1s ease-in-out',
    };

    const handlePrev =()=>{
        const isFirstSl = currIndes ===0;
        const newImageIndex = isFirstSl ? slides.length -1 : currIndes -1
        setCurrIndex(newImageIndex);
    };
    const handleNext =()=>{
        const isLastSl = currIndes ===slides.length -1;
        const newImageIndex = isLastSl ? 0 : currIndes +1
        setCurrIndex(newImageIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrIndex((prevIndex) => {
            if (prevIndex >= slides.length - 1) {
              return 0; // Loop back to the first slide
            }
            return prevIndex + 1; // Go to the next slide
          });
        }, 3000); // Change slide every second
      
        return () => clearInterval(interval); // Cleanup the interval on unmount or dependency change
      }, [slides.length]);


    return (
        <section className={styles.banner}>
            {/* <h1>Banner</h1> */}

            <div className={styles.slideCont}>
               <div className={styles.slider}>
                {/* SLider contorller ---> */}
                    <div className={styles.prevBtn}><button onClick={handlePrev} style={{cursor:'pointer',fontSize:'1.2rem'}}>&#10094;</button></div>
                    <div className={styles.nextBtn}><button onClick={handleNext} style={{cursor:'pointer',fontSize:'1.2rem'}}>&#10095;</button></div>

                {/* Slider ---->*/}
                    <div style={slideStyle} className={styles.slide}>
                        <h3>{slides[currIndes].title}</h3>
                        <p>{slides[currIndes].desc}</p>
                        <div className={styles.slideBtn}>
                            <Link href={'/#'}><ButtonC content={'Book a Table'}/> </Link>
                            <Link href={'/#'}><ButtonC content={'Our Menus'}/> </Link>
                        </div>
                     </div>

                {/* slider controller dots ----> */}
                    <div className={styles.dots}>
                        {
                            slides.map((s,sidnex)=><span style={{color:'blue',cursor:'pointer'}} onClick={()=>setCurrIndex(sidnex)} key={sidnex}>{currIndes===sidnex ? '🟢' :'⚪️'}</span>)
                        }
                    </div>
               </div>
            </div>
        </section>
    );
};

export default Banner;