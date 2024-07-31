//import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/librairies/action";
//import styles from "./login.module.css";

const LoginPage = () => {

  return (
    <div >
      <div >
        <form action={handleGithubLogin}>
          <button >Login with Github</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;