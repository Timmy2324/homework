import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css';

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.circleWrapper}>
                        <div className={s.windows8}>
                            <div className={s.wBall} id={s.wBall_1}>
                                <div className={s.wInnerBall}></div>
                            </div>
                            <div className={s.wBall} id={s.wBall_2}>
                                <div className={s.wInnerBall}></div>
                            </div>
                            <div className={s.wBall} id={s.wBall_3}>
                                <div className={s.wInnerBall}></div>
                            </div>
                            <div className={s.wBall} id={s.wBall_4}>
                                <div className={s.wInnerBall}></div>
                            </div>
                            <div className={s.wBall} id={s.wBall_5}>
                                <div className={s.wInnerBall}></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
