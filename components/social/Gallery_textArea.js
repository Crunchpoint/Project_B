import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import styles from "@/styles/social/Gallery_textArea.module.scss";

const Gallery_textArea = ({ props, props2, props3 }) => {
  const { boardCrud, setBoardCrud, crudModal, setCrudModal, setSelectedComment, sessionStorageFn, setSelectedvalue } = useContext(MyContext);

  return (
    <>
      <div className={styles.profile_img}>
        <figure>
          <img src='../src/img/main/Boeun_png.png' alt='' />
        </figure>
      </div>
      <div className={styles.contents}>
        <div>
          <p>admin</p>
          <p>{props}</p>
          <p
            onClick={(e) => {
              setBoardCrud(!boardCrud);
            }}>
            <svg aria-label='Comment Options' color='rgb(142, 142, 142)' fill='rgb(142, 142, 142)' height='24' role='img' viewBox='0 0 24 24' width='24'>
              <circle cx='12' cy='12' r='1.5'></circle>
              <circle cx='6' cy='12' r='1.5'></circle>
              <circle cx='18' cy='12' r='1.5'></circle>
            </svg>
          </p>
        </div>
        <div>
          <p>{props2}</p>
          <p>1 like</p>
          <p
            onClick={(e) => {
              setCrudModal(!crudModal);
              setSelectedvalue(props);
              setSelectedComment(props3);
            }}>
            <svg aria-label='Comment Options' color='rgb(142, 142, 142)' fill='rgb(142, 142, 142)' height='24' role='img' viewBox='0 0 24 24' width='24'>
              <circle cx='12' cy='12' r='1.5'></circle>
              <circle cx='6' cy='12' r='1.5'></circle>
              <circle cx='18' cy='12' r='1.5'></circle>
            </svg>
          </p>
        </div>
      </div>
      <svg className={styles.svg} onClick={() => sessionStorageFn(props3, props)} width='15' height='15' viewBox='0 0 44 41.95' version='1.1'>
        <defs />
        <g id='Untitled'>
          <path
            className={sessionStorage[props3] === props ? styles.like__active : styles.like}
            d='M22 39.3L19.95 37.45C16.4167 34.2167 13.5 31.425 11.2 29.075C8.9 26.725 7.06667 24.625 5.7 22.775C4.33333 20.925 3.375 19.25 2.825 17.75C2.275 16.25 2 14.7333 2 13.2C2 10.2 3.00833 7.69167 5.025 5.675C7.04167 3.65833 9.53333 2.65 12.5 2.65C14.4 2.65 16.1583 3.1 17.775 4C19.3917 4.9 20.8 6.2 22 7.9C23.4 6.1 24.8833 4.775 26.45 3.925C28.0167 3.075 29.7 2.65 31.5 2.65C34.4667 2.65 36.9583 3.65833 38.975 5.675C40.9917 7.69167 42 10.2 42 13.2C42 14.7333 41.725 16.25 41.175 17.75C40.625 19.25 39.6667 20.925 38.3 22.775C36.9333 24.625 35.1 26.725 32.8 29.075C30.5 31.425 27.5833 34.2167 24.05 37.45L22 39.3Z'
            // fill="#ffffff"
            stroke='#000000'
            strokeWidth='1'
            strokeLinecap='butt'
            strokeLinejoin='round'
          />
        </g>
      </svg>
    </>
  );
};
export default Gallery_textArea;
