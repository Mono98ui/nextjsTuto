import Link from "next/link";
import Links from "./links/links";
import style from "./navbar.module.css";

const Navbar = () => {
    return ( <div className={style.container}>
        <Link href="/" className={style.logo}>Lama</Link>
        <Links/>
    </div> );
}
 
export default Navbar;