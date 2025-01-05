import styles from './footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.cont1}>
            <div className={styles.column}>
            <h3>Know About Resto.</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
                mauris dis tincidunt ipsum faucibus ipsum.
            </p>
            <h3 className={styles.logo}>Hotel<span>X</span>.</h3>
            </div>
            <div className={styles.column}>
            <h3>Opening Hours</h3>
            <ul>
                <li>Monday: Closed</li>
                <li>Tuesday: 10 AM – 11 PM</li>
                <li>Wednesday: 10 AM – 11 PM</li>
                <li>Thursday: 10 AM – 11 PM</li>
                <li>Friday: 10 AM – 11 PM</li>
                <li>Saturday: 10 AM – 11 PM</li>
                <li>Sunday: 10 AM – 11 PM</li>
            </ul>
            </div>
        </div>
        <div className={styles.cont2}>
            <div className={styles.column}>
            <h3>Find Us</h3>
            <p>
                <strong>Address:</strong> 768 Market Street, San Francisco, CA 64015,
                United States
            </p>
            <p>
                <strong>Phone:</strong> (+021) 345 678 910
            </p>
            <p>
                <strong>Email:</strong> info@resto.com
            </p>
            <div className={styles.socials}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-envelope"></i>
            </div>
            </div>
            <div className={styles.column}>
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter & get all promo!</p>
            <form className={styles.newsletter}>
                <input type="email" placeholder="Email address" />
                <button type="submit">Subscribe</button>
            </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
