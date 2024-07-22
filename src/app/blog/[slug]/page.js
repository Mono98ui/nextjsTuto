import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePageBlog = () => {
    return (
        <div className={styles.container}>
        {"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" && (
          <div className={styles.imgContainer}>
            <Image src={"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="GOAT" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Cheeese</h1>
          <div className={styles.detail}>
          <Image className={styles.avatar} 
          src={"https://images.pexels.com/photos/7892342/pexels-photo-7892342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="GOAT" width={50} height={50}/>
          <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>
                Jeff
              </span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                12-12-2024
              </span>
            </div>
          </div>
          <div className={styles.content}>GOAT</div>
        </div>
      </div>
    );
}
 
export default SinglePageBlog;