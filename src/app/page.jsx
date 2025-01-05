import Banner from "@/component/Banner/Banner";
import styles from "./page.module.css";
import Home from "@/component/home/home";
// import ControlledCarousel from "@/component/Banner/Banner";

export default function HomePage() {
  return (
    <section className={styles.page}>

       <Banner/>
       <hr style={{width:'10%'}}/>
       <Home/>
    </section>
  );
}
