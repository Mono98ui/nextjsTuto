import PostUser from "@/components/postCard/postUser.js/postUser"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react"
import { getPost } from "@/librairies/data"

//Fetch data from api
/*
const getData = async (slug)=>{
  const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"})


  if(!res.ok){
      throw new Error("NAAA")

  }

  return res.json()

}
*/
const SinglePageBlog = async({params}) => {

  const {slug} = params;
  //Fetch data from api
  //const post = await getData(slug)
  //Fetch data without api
  const post = await getPost(slug)
    return (
        <div className={styles.container}>
        {"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" && (
          <div className={styles.imgContainer}>
            <Image src={"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="GOAT" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
          <Image className={styles.avatar} 
          src={"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="GOAT" width={50} height={50}/>
         {post && <Suspense fallback={<div>Loading</div>}>
            <PostUser id={slug}/>
          </Suspense>}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                12-12-2024
              </span>
            </div>
          </div>
          <div className={styles.content}>{post?.body}</div>
        </div>
      </div>
    );
}
 
export default SinglePageBlog;