'use client';
import Image from 'next/image';
import  { useEffect, useState } from 'react';



const ClientReview = () => {
    const clientTest =[
        {
            name:'Saul Goodman',
            title:'Ceo &amp; Founder',
            img:'https://i.ibb.co.com/ZT5rLLd/testimonials-1.jpg',
            review:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        },
        {
            name:'Sara Wilsson',
            title:'Designer',
            img:'https://i.ibb.co.com/jGQ0kKR/testimonials-2.jpg',
            review:'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa..',
        },
        {
            name:'Jena Karlis',
            title:'Store Owner',
            img:'https://i.ibb.co.com/VJp3G1N/testimonials-3.jpg',
            review:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim..',
        },
        {
            name:'Matt Brandon',
            title:'Freelancer',
            img:'https://i.ibb.co.com/wKhWgSr/testimonials-4.jpg',
            review:'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
        },
        {
            name:'John Larson',
            title:'Entrepreneur',
            img:'https://i.ibb.co.com/2NnKkpf/testimonials-5.jpg',
            review:'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
        }
    ]

      const [currIndex,setCurrIndex]=useState(0);  

    //   const handleClientTest =(i)=>{
    //     setCurrIndex(i);
    //   };

         useEffect(() => {
                const interval = setInterval(() => {
                setCurrIndex((prevIndex) => {
                    if (prevIndex >= clientTest.length - 1) {
                    return 0; // Loop back to the first slide
                    }
                    return prevIndex + 1; // Go to the next slide
                });
                }, 3000); // Change slide every second
            
                return () => clearInterval(interval); // Cleanup the interval on unmount or dependency change
            }, [clientTest.length]);

      const style1 ={
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundImage:`url(https://i.ibb.co.com/ZX5vnbc/gallery-13.jpg)`,
        width:'100%',
        height:'60vh'
    };

    const style2 ={
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        backgroundColor:'#00000085',
        transition:'all 3s ease-in-out'
    }

    return (
        <article style={style1}>
            <div style={style2}>
                <Image src={`${clientTest[currIndex]?.img}`} alt={`${clientTest[currIndex]?.name+currIndex}`} width={150} height={150} style={{borderRadius:'50%'}}/>
                <h3 style={{color:'#e2c3ff'}}>{clientTest[currIndex]?.name}</h3>
                <p style={{color:'#ffed9d'}}>{clientTest[currIndex]?.title}</p>
                <p style={{width:'30rem',fontSize:'1rem'}}>{clientTest[currIndex]?.review}</p>

                <div>
                    {
                        clientTest.map((s,sidnex)=><span style={{color:'blue',cursor:'pointer'}} onClick={()=>setCurrIndex(sidnex)} key={sidnex}>{currIndex===sidnex ? '🟢' :'⚪️'}</span>)
                    }
                </div>
            </div>
        </article>
    );
};

export default ClientReview;