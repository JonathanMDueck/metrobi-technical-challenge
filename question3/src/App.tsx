import styles from "./app.module.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import RelatedContent from "./components/relatedContent";
import Sidebar from "./components/sidebar";
import "./global.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <Content />
      </div>
      <RelatedContent />
      <Footer />
    </div>
  );
}

export default App;
