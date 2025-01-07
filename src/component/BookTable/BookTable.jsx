'use client';

import { useState } from 'react';
import styles from './bookTable.module.css';

export default function BookTable() {
  const [bookData, setBookData] = useState({
    name: '',
    mail: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const handleBookInfo = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value
    });
  };


  const handleBookForm=(e)=>{
    e.preventDefault();
    console.log(bookData);
    setBookData({
        name: '',
        mail: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: ''
    });
  };


  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://i.ibb.co/Ssj34NR/reservation.jpg"
          alt="Table setting"
          className={styles.image}
        />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.heading}>
          <span>Book</span> a Table
        </h2>
        <form className={styles.form} onSubmit={handleBookForm}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleBookInfo}
                value={bookData?.name}
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="mail" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                onChange={handleBookInfo}
                value={bookData?.mail}
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>
                Your Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                onChange={handleBookInfo}
                value={bookData?.phone}
                placeholder="Enter your phone number"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="date" className={styles.label}>
                Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                onChange={handleBookInfo}
                value={bookData?.date}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="time" className={styles.label}>
                Time*
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                onChange={handleBookInfo}
                value={bookData?.time}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="people" className={styles.label}>
                # of People*
              </label>
              <input
                type="number"
                id="people"
                name="people"
                required
                onChange={handleBookInfo}
                value={bookData?.people}
                placeholder="Enter number of people"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleBookInfo}
              value={bookData?.message}
              placeholder="Enter your message"
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Book a Table
          </button>
        </form>
      </div>
    </div>
  );
};
