import Banner from "@/component/Banner/Banner";
import styles from "./page.module.css";
// import ControlledCarousel from "@/component/Banner/Banner";

export default function Home() {
  return (
    <section className={styles.page}>

       <Banner/>
       {/* <ControlledCarousel/> */}
    </section>
  );
}
