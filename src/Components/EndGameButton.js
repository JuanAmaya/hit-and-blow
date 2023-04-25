export default function EndGameButton({ children, onClick }) {
    return <button onClick={onClick} className="text-2xl text-botw-brown italic border-2 font-semibold border-botw-brown w-60 p-2 hover:text-mainBG hover:bg-botw-brown transition-colors">
        {children}
    </button>;
}