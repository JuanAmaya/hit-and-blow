export default function Button({ children, textColor, onClick }) {
    return <div
        className={`${textColor} bg-black/80 border-2 border-white/20 rounded-sm font-semibold italic white text-2xl p-2 text-center w-60 select-none hover:bg-black/10 active:bg-black/20 transition-colors`}
        onClick={onClick}
    >
        {children}
    </div>;
}