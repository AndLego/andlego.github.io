import React from 'react';
import style from "./Eyes.module.css"

const Eyes = () => {
    return (
        <div className={style.cat}>
            <div className={style.face}>
                <div className={`${style.eye} ${style.eyeLeft}`}>
                    <div className={style.eyePupil}></div>
                </div>
                <div className={`${style.eye} ${style.eyeRight}`}>
                    <div className={style.eyePupil}></div >
                </div >
                <div className={style.muzzle}></div >
            </div >
        </div >
    );
}

export default Eyes;