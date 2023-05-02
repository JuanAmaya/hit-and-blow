import { motion } from "framer-motion";
import EndGameButton from "../Components/EndGameButton";

export default function EndGame({ openGameScreen, openEndGameScreen, userWon }) {
    const closeGameScreen = () => {
        openGameScreen(false);
        openEndGameScreen(false);
    };

    const retryGameScreen = () => {
        openGameScreen(true);
        openEndGameScreen(false);
    };

    let textColor = "text-botw-brown";
    if (userWon) {
        textColor = "text-sheikah-lightBlue";
    } else {
        textColor = "text-defeat-red";
    }

    return <div className="h-screen flex justify-center items-center flex-col gap-14">
        <motion.h2
            initial={{ opacity: 0, x: "-150vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .3 }}
            className={`${`${userWon ? "bg-botw-brown/20" : "bg-stone-700/20"}`} ${textColor} text-6xl font-semibold text-center p-6 w-screen`}
        >
            {userWon && "Complete"} {!userWon && "Defeat"}
        </motion.h2>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delay: .3 }}
            className="flex flex-col gap-6"
        >
            <EndGameButton onClick={retryGameScreen}>RETRY</EndGameButton>
            <EndGameButton onClick={closeGameScreen}>QUIT</EndGameButton>
        </motion.div>
    </div>;
}