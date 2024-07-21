import Link from "next/link";
import Navbarlinks from "./navbarlinks/navbarlinks";
import style from "./links.module.css"
const Links = () => {

    const links = [
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]

    return (
        <div className={style.links}>
            {links.map((link)=>(
                <Navbarlinks item ={link} key={link.title}/>
            ))}
        </div>
    );
}
 
export default Links;