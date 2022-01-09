import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.wrapper}>
            <div className={s.affairName}>
                {props.affair.name}
            </div>
            <div className={s.affairPriority}>
                {props.affair.priority}
            </div>


            <SuperButton red onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
