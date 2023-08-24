//para utilizar o componente crie o import na pagina que deseja 
//coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
//passe a informação dentro da tag Footer - LINK 
//<footer link=()>ProfCastello</Footer>

import SocialLinks from "../sociaLinks/sociallinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por {""}
        <a href={link}  target="_blank">
          {children}
          </a>
          </p>
            <SocialLinks icon={"logo-instagram"} href={"#"} />
            <SocialLinks icon={"logo-github"} href={"#"} />
            <SocialLinks icon={"logo-tiktok"} href={"#"} />
            <SocialLinks icon={"logo-linkedin"} href={"#"} />
            <SocialLinks icon={"logo-twitter"} href={"#"} />
    </footer>
  );
};
export default Footer;
