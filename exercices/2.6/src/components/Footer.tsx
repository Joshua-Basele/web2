import "./Footer.css";

interface FooterProps{
    children : React.ReactNode;
    url: string;
}

const Footer = (props : FooterProps) => {
    return(
        <footer>
            <div>{props.children}</div>
            <img src={props.url} alt="" />
        </footer>
    );
}

export default Footer;