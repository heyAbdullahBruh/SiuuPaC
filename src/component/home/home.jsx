import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {

    const whyChooseUs = [
        {
          title: "Fresh Ingredients",
          description: "We source the freshest and finest ingredients to ensure every meal is of the highest quality and bursting with flavor.",
        },
        {
          title: "Exceptional Service",
          description: "Our friendly and attentive staff are committed to making your dining experience unforgettable.",
        },
        {
          title: "Unique Ambiance",
          description: "Enjoy a cozy and inviting atmosphere perfect for a romantic dinner or a family gathering.",
        },
        {
          title: "Affordable Pricing",
          description: "Experience gourmet meals at prices that won’t break the bank, offering great value for every bite.",
        },
        {
          title: "Culinary Expertise",
          description: "Our chefs bring years of experience and creativity to craft dishes that tantalize your taste buds.",
        },
      ];
      
      const posts = [
        {
          title: 'Instant Pot Wild Rice Soup',
          image: 'https://i.ibb.co.com/3pBwh6N/events-slider-1.jpg',
          date: 'November 21, 2022',
        //   comments: 'No Comments',
        },
        {
          title: 'Harissa Meatballs with Whipped Feta',
          image: 'https://i.ibb.co.com/gw9xgT0/gallery-1.jpg',
          date: 'November 21, 2022',
        //   comments: 'No Comments',
        },
        {
          title: 'Chipotle Orange Shrimp with Cilantro Rice',
          image: 'https://i.ibb.co.com/Y7wTW2j/gallery-5.jpg',
          date: 'November 21, 2022',
        //   comments: 'No Comments',
        },
      ];

    return (
        <section className={styles.home}>
            <section className={styles.homeCont1}>
                <article className={styles.homeAbt}>
                    <div className={styles.homeAbtImg1}>
                        <img src="https://i.ibb.co.com/J2HqPsk/about.jpg" alt="homeAboutUs" />
                    </div>
                    <div className={styles.homeAbtDsc}>
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <ul>
                            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>

                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </article>
            </section>
                <hr />

            <section className={styles.homeCont2}>
                <h5>Why Us</h5>
                <h2>Why choose <span>Our Restaurant</span></h2>
                    <div className={styles.whyUs}>
                        {
                            whyChooseUs.map((item ,index)=>(
                                <article key={`item${index}`}>
                                    <h4>0{index+1}</h4>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))
                        }
                    </div>
            </section>
            <hr />

            <section className={styles.homeCont3}>
            <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Latest News</h2>
          <p className={styles.description}>
            Sed nulla sed purus vitae. Urna est viverra sed etiam quisque. Nisi in pulvinar ultrices tempor.
          </p>
        </div>
        <a href="/blog" className={styles.viewAll}>
          View All
        </a>
            </div>

            <div className={styles.cardContainer}>
                {posts.map((post, index) => (
                <div className={styles.card} key={index}>
                    <Image
                    src={post.image}
                    alt={post.title}
                    width={320}
                    height={180}
                    className={styles.image}
                    />
                    <div className={styles.content}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.meta}>
                        {post.date} &bull; 
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </section>
    );
};

export default Home;