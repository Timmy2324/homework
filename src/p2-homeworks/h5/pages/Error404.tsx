import React from 'react';
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.errorWrapper}>
            <div className={`${s.text404} ${s.gradient}`}>404</div>
            <div className={`${s.notFound} ${s.gradient}`}>Page not found!</div>
            <div className={`${s.picture} ${s.gradient}`}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
