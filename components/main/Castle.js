import styles from "@/styles/main/Castle.module.scss"
import React, { useEffect, useRef, useState } from 'react'
import Image from '../../public/src/img/main/lafuta_png.png'

const Castle = () => {

  const observerRef = useRef([]);
  const [active,setActive] = useState(false);

  useEffect(()=>{

    let observer = new IntersectionObserver(
      ([e]) => {
        console.log("e.target", e.target)
        if (e.isIntersecting) {
          setActive(true)
        }
      },
      { threshold: 0.5 }
    );

    if(observerRef.current){
      observer.observe(observerRef.current)
    }
  },[observerRef,active])
      

  return (
    <div className={`${styles.main_bg} ${active?styles.active:null}`} ref={observerRef}>
        <button className={styles.button}>SEE MORE</button>
        <div className={styles.main_img}>
            <img src="../src/img/main/lafuta_png.png" alt='라퓨타'/>
        </div>
        <div className={styles.text}>
            <div className={styles.main_text}>Castle</div>
            <div className={styles.main_text2}>in the Sky</div>
        </div>
    </div>
  )
}

export default Castle