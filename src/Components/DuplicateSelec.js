import { AnimatePresence, motion } from "framer-motion";
import Arrow from "./SVG/Arrow";

export default function DuplicateSelec({ gameMode, setGameMode }) {
    const easyMode = () => {
        setGameMode('off');
    };

    const hardMode = () => {
        setGameMode('on');
    };

    return <div className="text-center mt-12 text-xl text-botw-brown">
        <h2 className="select-none">Duplicate Colors</h2>
        <div className="relative flex justify-center bg-black/80 w-32 mx-auto py-2 overflow-hidden border-2 border-white/20 rounded-3xl mt-4 h-12">
            <AnimatePresence>
                {gameMode === 'on' &&
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 inset-y-0 m-auto"
                        onClick={easyMode}
                    >
                        <Arrow dPath={"M15.75 19.5L8.25 12l7.5-7.5"} styles={"w-6 h-6"} />
                    </motion.button >
                }
            </AnimatePresence>
            <AnimatePresence>
                <motion.span
                    key={gameMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="italic capitalize select-none absolute"
                >
                    {gameMode}
                </motion.span>
            </AnimatePresence>
            <AnimatePresence>
                {gameMode === 'off' &&
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-0 inset-y-0 m-auto"
                        onClick={hardMode}
                    >
                        <Arrow dPath={"M8.25 4.5l7.5 7.5-7.5 7.5"} styles={"w-6 h-6"} />
                    </motion.button>
                }
            </AnimatePresence>
        </div>
    </div>;
}