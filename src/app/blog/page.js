import PostCard from "@/components/postCard/postCard";
import styles from "./BlogPage.module.css"
const BlogPage = () => {
    const postList = [
        {}
    ]
    return ( <div className={styles.container}>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
        <div className={styles.post}>
        <PostCard/>
        </div>
    </div> );
}
 
export default BlogPage;