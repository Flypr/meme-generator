export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <img src="./images/troll-face.svg" alt="logo" className="header__logo" />
                    <h2 className="header__title">Meme Generator</h2>
                    <h4 className="header__project">React - Personal Project</h4>
                </div>
            </div>
        </header>
    );
}