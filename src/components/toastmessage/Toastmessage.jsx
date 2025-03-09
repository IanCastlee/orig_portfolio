import "./Toastmessage.scss";
import { motion } from "framer-motion";

const Toastmessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="toast-message"
    >
      <p>Not Available for Now</p>
    </motion.div>
  );
};

export default Toastmessage;
