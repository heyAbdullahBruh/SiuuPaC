'use client';
import { useState } from 'react';
import styles from './banner.module.css';

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

    return (
        <section className={styles.banner}>
            <h1>Banner</h1>
        </section>
    );
};

export default Banner;