import { getUser } from "@/librairies/data";
import styles from "./postUser.module.css"
import Image from "next/image"
//Fetch data from api
/*
const getData = async (id)=>{
    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  
  
    if(!res.ok){
        throw new Error("NAAA")
  
    }
  
    return res.json()
  
  }
    */

const PostUser = async({id}) => {

//Fetch data from api
    //const user = await getData(id)
//Fetch data without api
    const user = await getUser(id)

    return ( 
        <div className={styles.container}>
        <Image className={styles.avatar} 
          src={user.img ? user.img: "/noavatar.png"} alt="GOAT" width={50} height={50}/>
        <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>
          {user?.username}
        </span>
        </div>
      </div>);
}
 
export default PostUser;