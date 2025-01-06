import { chefsData } from '@/data/eventData';
import styles from './chef.module.css';

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
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-linkedin"></i>
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