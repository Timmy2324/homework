import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Navigation";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Header.module.css';

function Header() {

    const [isShow, setIsShow] = useState(false);

    function onClickAddShowClass() {
        setIsShow(!isShow)
    }

    return (
        <div className={`${s.wrapper} ${isShow ? s.show : ''}`}>
            <ul className={s.links}>
                <li className={s.linkItem}>
                    <NavLink
                        to={PATH.PRE_JUNIOR}
                        className={({isActive}) => isActive ? s.active : ''}
                    >
                        pre junior
                    </NavLink>
                </li>
                <li className={s.linkItem}>
                    <NavLink
                        to={PATH.JUNIOR}
                        className={({isActive}) => isActive ? s.active : ''}
                    >
                        junior
                    </NavLink>
                </li>
                <li className={s.linkItem}>
                    <NavLink
                        to={PATH.JUNIOR_PLUS}
                        className={({isActive}) => isActive ? s.active : ''}
                    >
                        junior+
                    </NavLink>
                </li>
            </ul>
            <SuperButton
                onClick={onClickAddShowClass}
            >
                {isShow ? 'hide' : 'show'} menu
            </SuperButton>
        </div>
    )
}

export default Header
