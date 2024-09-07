import "./Header.css";

export default function Header() {
    return (
        <>
            <header className="home-header">
                <div>
                    <h2><a target="_blank" href="https://www.uefa.com/euro2024/">OFFICIAL UEFA EURO 2024</a></h2>
                </div>
                <div>
                    <ul>
                        <li><a href="http://">Matches</a></li>
                        <li>Group Stage</li>
                        <li>News</li>
                        <li>Statistics</li>
                    </ul>
                </div>
            </header>
        </>
    )
}