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
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="GOAT" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
         {post && <Suspense fallback={<div>Loading</div>}>
            <PostUser id={post.userId}/>
          </Suspense>}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {post.createdAt.toString().slice(4, 16)}
              </span>
            </div>
          </div>
          <div className={styles.content}>{post?.desc}</div>
        </div>
      </div>
    );
}
 
export default SinglePageBlog;