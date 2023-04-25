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
        <div className="relative flex justify-center bg-black/80 w-32 mx-auto py-2 overflow-hidden border-2 border-white/20 rounded-3xl mt-4">
            {gameMode === 'on' && <button className="absolute left-0 inset-y-0 m-auto" onClick={easyMode}>
                <Arrow dPath={"M15.75 19.5L8.25 12l7.5-7.5"} />
            </button>}
            <span className="italic capitalize select-none">{gameMode}</span>
            {gameMode === 'off' && <button className="absolute right-0 inset-y-0 m-auto" onClick={hardMode}>
                <Arrow dPath={"M8.25 4.5l7.5 7.5-7.5 7.5"} />
            </button>}
        </div>
    </div>;
}