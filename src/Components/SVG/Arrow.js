export default function Arrow({ dPath, styles }) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d={dPath} />
    </svg>;
}