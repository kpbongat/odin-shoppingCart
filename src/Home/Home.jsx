import styles from "./Home.module.css";
import saleBanner1 from "/src/assets/saleBanner1.jpg";
import saleBanner2 from "/src/assets/saleBanner2.jpg";
function Home() {
  return (
    <section className={styles.section}>
      <img src={saleBanner1} alt="" width="1000px" height="auto" />
      <img src={saleBanner2} alt="" width="1000px" height="auto" />
    </section>
  );
}

export default Home;
