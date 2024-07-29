import PostCard from "@/components/postCard/postCard";
import styles from "./BlogPage.module.css"
import { revalidatePath } from "next/cache";
import { getPosts,getPost } from "@/librairies/data"

//Fetch data from api

const getData = async ()=>{
    const res =await fetch("http://localhost:3000/api/blog", {next: {revalidate:3600}})


    if(!res.ok){
        throw new Error("NAAA")

    }

    return res.json()

}

const BlogPage = async () => {
//Fetch data from api
    const posts = await getData()
//Fetch data without api
    //const posts = await getPosts()
    return ( <div className={styles.container}>
        {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
        </div>
        ))}
    </div> );
}
 
export default BlogPage;