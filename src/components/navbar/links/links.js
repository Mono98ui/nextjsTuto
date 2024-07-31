"use client"

import Link from "next/link";
import Navbarlinks from "./navbarlinks/navbarlinks";
import style from "./links.module.css"
import { useState } from "react";
import Image from "next/image"
import { handleGithubLogout } from "@/librairies/action";

const Links = () => {

    const [open, setOpen] = useState(false)

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

    //Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div className={style.container}>
        <div className={style.links}>
            {links.map((link)=>(
                <Navbarlinks item ={link} key={link.title}/>
            ))}
            {
                session ? 
                <>
                 {isAdmin && 
                <Navbarlinks item ={{
                    title:"Admin",
                    path:"/admin"
                }}/> }
                <form action={handleGithubLogout}>
                    <button className={style.logout}>Logout</button>
                </form>
                </>
                : 
                (<Navbarlinks item ={{
                    title:"Login",
                    path:"/login"
                }}/>) 
            }

        </div>
        <Image src="/menu.png" className={style.menuButton} width={30} height={30} alt="" onClick={()=> setOpen((prev)=>!prev)}/>
        {
            open && <div className={style.mobileLinks}>
                {links.map((link)=>(
                <Navbarlinks item ={link} key={link.title}/>
            ))}
            </div>
        }
        </div>
    );
}
 
export default Links;