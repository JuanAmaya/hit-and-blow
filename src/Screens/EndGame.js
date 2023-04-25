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
        <h2 className={`${textColor} text-6xl font-semibold`}>{userWon && "Complete"} {!userWon && "Defeat"}</h2>
        <div className="flex flex-col gap-6">
            <EndGameButton onClick={retryGameScreen}>RETRY</EndGameButton>
            <EndGameButton onClick={closeGameScreen}>QUIT</EndGameButton>
        </div>
    </div>;
}