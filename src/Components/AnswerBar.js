import { motion } from "framer-motion";

export default function AnswerBar({ answer, showAnswer }) {
    return <div className="mt-10 flex justify-center">
        <motion.div
            initial={{ width: 0 }}
            animate={{
                width: "100%",
                backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']
            }}
            className="bg-sheikah-darkBlue border-2 border-shiny-lightBlue h-16 w-96 rounded-lg flex overflow-hidden drop-shadow-blueDrop"
        >
            {answer.map((colorSelec, i) => (
                <div className={`${`${(showAnswer && answer.length === 4) ? `bg-pick-${colorSelec + 1}` : "bg-sheikah-darkBlue"}`} w-24 h-16 transition-colors`} key={i}></div>
            ))}
        </motion.div>
    </div>;
}