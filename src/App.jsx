import Header from "./components/header.jsx";
import Writeup from "./components/writeup.jsx";
import Cta from "./components/cta.jsx";
import Images from "./components/images.jsx";
import Scroll from "./components/scroll.jsx";
import Footer from "./components/footer.jsx";

function App() {

  return (
    <div className="min-h-full">
        <Header />
        <Writeup />
        <Cta />
        <Images />
        <Scroll />
        <Footer />
    </div>
  )
}

export default App
