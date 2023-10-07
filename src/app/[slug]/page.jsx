import Menu from "@/components/menu/Menu"
import styles from "./singlePage.module.css"
import Image from "next/image"

const SiglePage = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>07.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, dignissimos!
            </p>
            <h2>Lorem ipsum dolor, sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, dignissimos!amet consectetur adipisicing elit. Error, dignissimos!
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, dignissimos!
            </p>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SiglePage