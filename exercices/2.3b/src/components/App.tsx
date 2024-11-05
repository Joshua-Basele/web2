import PageTitle from "./PageTitle";
import Utilisateur from "./Utilisateur";
import Footer from "./Footer";
import { User } from "../types";

const App = () => {
  const title = "Welcome to My App";
  const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title}/>

      {users.map(user => (
        <Utilisateur user={user}/>
      ))}
      
      <Footer text={footerText}/>
    </div>
  );
};

export default App;