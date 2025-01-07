import styles from './about.module.css';
import ClientReview from './clientReviw/clientReview';

const AboutUs = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutHead}>
                <h1>About Us </h1><hr />
            </div>

            <div className={styles.abouthero}>
                 <div className={styles.heroSec}>
                    <h3>1000+</h3>
                    <p>Daily Customer</p>
                 </div>
                 <div className={styles.heroSec}>
                    <h3>500+</h3>
                    <p>Reguler Delivery</p>
                 </div>
                 <div className={styles.heroSec}>
                    <h3>100.0+</h3>
                    <p>Daily Event</p>
                 </div>
                 <div className={styles.heroSec}>
                    <h3>50+</h3>
                    <p>Food Item</p>
                 </div>
            </div>

            <div className={styles.aboutDesc}>
                <p>Welcome to <strong>HotelX</strong>, where passion meets flavor! Nestled in the heart of #68 Market Street, Sanfransisco. we are a family-owned establishment dedicated to creating memorable dining experiences. Since opening our doors in 2007, our mission has been to bring people together over delicious food, warm hospitality, and a cozy ambiance.</p>
               <div>
                    <h4>Our Story</h4> <hr />
                    <p>HotelX was born out of a love for  authentic Italian dishes and a dream to share the richness of Italian tradition with our community. Our journey started with MrPieee and their vision to combine  time-honored recipes with a modern twist. Over the years, we've grown from a small idea into a beloved spot where families, friends, and foodies come to connect.</p>
                </div>
               <div>
                    <h4>Our Menu</h4><hr />
                    <p>
                    At HotelX, we take pride in crafting dishes that celebrate the finest ingredients and bold flavors. From our signature [dish] to our irresistible [dish or category], every plate tells a story of quality and creativity. We prioritize locally sourced, seasonal ingredients to ensure every bite is fresh and full of flavor.At HotelX, we take pride in crafting dishes that celebrate the finest ingredients and bold flavors. From our signature [dish] to our irresistible [dish or category], every plate tells a story of quality and creativity. We prioritize locally sourced, seasonal ingredients to ensure every bite is fresh and full of flavor.<br/> Our menu caters to everyone, with options for vegetarians, vegans, and those with dietary restrictions. Whether you're here for a hearty meal, a light bite, or just a decadent dessert, there's something for everyone to savor.
                    </p>
               </div>
               <div>
                    <h4>The Experience</h4><hr />
                    <p>Step into HotelX, and you'll feel right at home. Our thoughtfully designed space combines interior design features, e.g., rustic charm, modern elegance with a welcoming atmosphere. Our attentive team is here to make your visit unforgettable, whether it’s a casual lunch, a romantic dinner, or a special celebration.</p>
               </div>
               <div>
                    <h4>Community Commitment</h4><hr />
                    <p>As a proud member of the NewYork community, we believe in giving back. Through partnerships with local suppliers and involvement in community events, we strive to make a positive impact. Your support helps us continue to do what we love while contributing to the growth of our community.</p>
               </div>
            </div><hr />

            <div className={styles.aboutImg}>
                <img src="https://i.ibb.co.com/yNjcXjV/mission.png" alt="mission" />
                <img src="https://i.ibb.co.com/4NmDKXg/vission.png" alt="vission" />
                <img src="https://i.ibb.co.com/s9Qvk42/statistic.png" alt="statistic" />
            </div>

            <div className={styles.clientTest}>
                <h1>CLient Testimonial</h1>
                <ClientReview/>
            </div>
        </section>
    );
};

export default AboutUs;