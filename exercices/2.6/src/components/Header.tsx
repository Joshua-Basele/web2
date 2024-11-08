import "./Header.css";

interface HeaderProps{
    children : React.ReactNode;
    url: string;
}

const Header = (props : HeaderProps) => {
    return (
        <header>
            <img src={props.url} alt="" />
            <div>{props.children}</div>
        </header>
    );
}

export default Header;