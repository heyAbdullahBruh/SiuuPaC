'use client';
import { useState } from 'react';
import styles from './comtact.module.css';

const Contact = () => {

    const [formData,setFormdata]=useState({
        name:'',
        mail:'',
        subject:'',
        message:''
    });

    const handleInpVal =(e)=>{
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Thanks for Message . ${formData.name}`);
        console.log(formData);
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactDetails}>
                <h2 className={styles.heading}>Get in touch</h2>
                <p className={styles.description}>
                Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.
                </p>
                <div className={styles.infoItem}>
                <p className={styles.icon}>📍</p>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className={styles.infoItem}>
                <p className={styles.icon}>✉️</p>
                <p>info@example.com</p>
                </div>
                <div className={styles.infoItem}>
                <p className={styles.icon}>📞</p>
                <p>+1 5589 55488 55</p>
                </div>
            </div>

            <div className={styles.formContainer}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input onChange={handleInpVal} required name='name' type="text" placeholder="Your Name" className={styles.inputField} value={formData.name} />
                    <input onChange={handleInpVal} required name='mail' type="email" placeholder="Your Email" className={styles.inputField} value={formData.mail}/>
                </div>
                <input onChange={handleInpVal} required name='subject' type="text" placeholder="Subject" className={styles.inputField} value={formData.subject}/>
                <textarea onChange={handleInpVal} required name='message' placeholder="Message" className={styles.textarea} value={formData.message}></textarea>
                <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>

            <div className={styles.mapContainer}>
                <h2 className={styles.heading}>Check Our Contact</h2>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.987913236421!2d-74.00713908425266!3d40.71104147933024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2070ef54fb%3A0x747ba7b924cb868e!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1612916921198!5m2!1sen!2sus"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className={styles.mapIframe}
                ></iframe>
            </div>
        </div>
  );
};

export default Contact;