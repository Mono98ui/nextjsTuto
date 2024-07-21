import Links from "./links/links";
import style from "./navbar.module.css";

const Navbar = () => {
    return ( <div className={style.container}>
        <div>Logo</div>
        <Links/>
    </div> );
}
 
export default Navbar;