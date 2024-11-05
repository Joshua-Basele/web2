import { User } from "../types";

interface UtilisateurProps {
    user : User;
  }

const Utilisateur = (props: UtilisateurProps) => (
    <div>
        <h2>{props.user.name}</h2> 
        <p>{props.user.name}</p>
    </div>
);
  
export default Utilisateur;