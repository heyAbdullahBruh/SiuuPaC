'use client';
import { useState } from 'react';
import styles from './steEvent.module.css';
import { restaurantEvents } from '@/data/eventData';


const StartEvent = () => {
    const [eventData, seteventData] = useState({
        name: '',
        mail: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        eventName:'Birthday Party',
        message: ''
      });
    
      const handleEventInfo = (e) => {
        seteventData({
          ...eventData,
          [e.target.name]: e.target.value
        });
      };
    
    
      const handleEventForm=(e)=>{
        e.preventDefault();
        console.log(eventData);
        seteventData({
            name: '',
            mail: '',
            phone: '',
            date: '',
            time: '',
            people: '',
            eventName:'Birthday Party',
            message: ''
        });
      };
    
    
      return (
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <img
              src="https://i.ibb.co.com/WfRkGC2/event.jpg"
              alt="Event Setting"
              className={styles.image}
            />
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.heading}>
              <span>Start</span> Your Event
            </h2>
            <form className={styles.form} onSubmit={handleEventForm}>
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
                    onChange={handleEventInfo}
                    value={eventData?.name}
                    placeholder="Enter your name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="mail" className={styles.label}>
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    onChange={handleEventInfo}
                    value={eventData?.mail}
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
                    onChange={handleEventInfo}
                    value={eventData?.phone}
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
                    onChange={handleEventInfo}
                    value={eventData?.date}
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
                    onChange={handleEventInfo}
                    value={eventData?.time}
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
                    onChange={handleEventInfo}
                    value={eventData?.people}
                    placeholder="Enter number of people"
                    className={styles.input}
                  />
                </div>
              </div>
              <div className={styles.row1}>
                <label htmlFor="eventName" className={styles.label}>
                  Event Name *
                </label>
                <select className={styles.select} name='eventName' value={eventData?.eventName} onChange={handleEventInfo}>
                    {
                        restaurantEvents?.map((i)=><option value={i.eventName} key={i.eventName}>{i.eventName}</option>)
                    }
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  More info of your event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleEventInfo}
                  value={eventData?.message}
                  placeholder="More Info"
                  className={styles.textarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.button}>
                Request
              </button>
            </form>
          </div>
        </div>
      );
};

export default StartEvent;