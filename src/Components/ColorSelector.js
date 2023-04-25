import { motion } from "framer-motion";
import ColorPick from "./ColorPick";

let pickNum = 6;

export default function ColorSelector({ userTry, selectedColors, onClick, option1, option2, option3, option4 }) {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-11/12 bg-black/80 border-2 border-white/20 p-4 mt-16 grid grid-cols-fluid justify-items-center gap-3 mb-2 rounded-xl max-w-2xl"
    >
        {(userTry.length < 4 || option1 || option2 || option3 || option4) && [...Array(pickNum)].map((e, i) => (
            <ColorPick i={i} key={i} selectedColors={selectedColors} />
        ))}
        {userTry.length === 4 && !option1 && !option2 && !option3 && !option4 &&
            <span className="text-center text-white font-semibold text-6xl w-full" onClick={onClick}>OK</span>
        }
    </motion.div>;
}