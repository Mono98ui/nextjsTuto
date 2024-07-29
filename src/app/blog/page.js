import PostCard from "@/components/postCard/postCard";
import styles from "./BlogPage.module.css"
import { revalidatePath } from "next/cache";
import { getPosts } from "@/librairies/data"

//Fetch data from api
/*
const getData = async ()=>{
    const res =await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:3600}})


    if(!res.ok){
        throw new Error("NAAA")

    }

    return res.json()

}
    */
export const generateMetadata = async ({ params }) => {
    const { slug } = params;
  
    const post = await getPost(slug);
  
    return {
      title: post.title,
      description: post.desc,
    };
  };
const BlogPage = async () => {
//Fetch data from api
    //const posts = await getData()
//Fetch data without api
    const posts = await getPosts()

    return ( <div className={styles.container}>
        {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
        </div>
        ))}
    </div> );
}
 
export default BlogPage;