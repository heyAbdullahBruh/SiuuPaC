import styles from './terms.module.css';

const Terms = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Terms & Conditions</h1>
            <p className={styles.intro}>
            Welcome to <strong>HotelX</strong>. By using our services or dining with us, you agree to the following terms and conditions.
            </p>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>1. General</h2>
            <p>1.1 Service availability is subject to change without notice.</p>
            <p>1.2 Alcoholic beverages are served only to individuals of legal drinking age (21+). Valid ID is required.</p>
            <p>1.3 We reserve the right to refuse service to individuals who violate our policies or behave disruptively.</p>
            </section>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>2. Reservations & Cancellations</h2>
            <p>2.1 Reservations can be made online, via phone, or through third-party platforms.</p>
            <p>2.2 Cancellations must be made at least 24 hours in advance. Late cancellations may incur a fee.</p>
            <p>2.3 Late arrivals beyond 15 minutes may result in the table being reassigned.</p>
            </section>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>3. Payments & Refunds</h2>
            <p>3.1 Prices listed are inclusive of applicable taxes and service charges unless otherwise stated.</p>
            <p>3.2 Accepted payment methods include cash, credit/debit cards, and digital payments.</p>
            <p>3.3 Refunds are provided at management's discretion for valid concerns regarding service or food quality.</p>
            </section>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>4. Food Allergies & Special Requests</h2>
            <p>4.1 Please notify staff of any allergies or dietary restrictions when placing your order.</p>
            <p>4.2 We make every effort to minimize cross-contamination but cannot guarantee an allergen-free environment.</p>
            </section>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>5. Online Orders & Delivery</h2>
            <p>5.1 Online orders are confirmed once payment is processed successfully.</p>
            <p>5.2 Delivery times are estimates and may vary due to unforeseen circumstances.</p>
            <p>5.3 Any issues with online orders must be reported within 24 hours of receipt.</p>
            </section>
    
            <section className={styles.section}>
            <h2 className={styles.subheading}>6. Conduct on Premises</h2>
            <p>6.1 Guests are expected to behave respectfully toward staff and other patrons.</p>
            <p>6.2 Only service animals are permitted unless stated otherwise.</p>
            <p>6.3 We are not responsible for lost or damaged personal belongings.</p>
            </section>
    
            <footer className={styles.footer}>
            <p>
                For questions or concerns, contact us at{' '}
                <a href="mailto:info@restaurant.com">info@restaurant.com</a>.
            </p>
            </footer>
        </div>
    );
};

export default Terms;