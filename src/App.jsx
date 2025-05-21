import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Main content="Contenuto nuovo con prop" />
      <Footer />
    </>
  );
}
