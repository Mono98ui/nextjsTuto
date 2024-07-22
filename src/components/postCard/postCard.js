import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" && <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>12-12-2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Cheeese</h1>
        <p className={styles.desc}>Goat</p>
        <Link className={styles.link} href={`/blog/test`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard