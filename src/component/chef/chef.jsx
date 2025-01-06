import { chefsData } from '@/data/eventData';
import styles from './chef.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Chefs = () => {
    
    
      return (
        <section className={styles.chefs}>
          <div className={styles.heading}>
            <h2>Chefs</h2>
            <p>Our Professional <span>Chefs</span></p>
          </div>
          <div className={styles.grid}>
            {chefsData.map((person, index) => {
                const { name, title, imgSrc }=person;
                return(
                    <article className={styles.card} key={`chef${index}`}>
                        <img src={imgSrc} alt={`${name}`} className={styles.image} />
                        <div className={styles.details}>
                            <h3 className={styles.name}>{name}</h3>
                            <p className={styles.title}>{title}</p>
                            <div className={styles.icons}>
                                <Link href={'/#'} style={{textDecoration:'none'}}><FontAwesomeIcon  icon={faFacebook}/></Link>
                                <Link href={'/#'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faInstagram}/></Link>
                                <Link href={'/#'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faLinkedin}/></Link>
                                <Link href={'/#'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faXTwitter}/></Link>
                                <Link href={'/#'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faYoutube}/></Link>
                            </div>
                        </div>
                    </article>
                );
            })}
          </div>
        </section>
      );
};

export default Chefs;