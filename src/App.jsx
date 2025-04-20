import { motion } from "framer-motion";

import Header from "./components/header.jsx";
import Writeup from "./components/writeup.jsx";
import Cta from "./components/cta.jsx";
import Images from "./components/images.jsx";
import Footer from "./components/footer.jsx";

function App() {
    return (
        <div className="space-y-10">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Header />
            </motion.div>
            
            <div className="absolute top-[50%] -translate-y-[50%]">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Writeup />
                </motion.div>
                
                
                <Cta />
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Images />
                </motion.div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
