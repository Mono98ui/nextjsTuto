import Link from "next/link";
import Links from "./links/links";
import style from "./navbar.module.css";
import { auth } from "@/librairies/auth";

const Navbar = async () => {

    const session = await auth()

    return ( <div className={style.container}>
        <Link href="/" className={style.logo}>Lama</Link>
        <Links session = {session}/>
    </div> );
}
 
export default Navbar;