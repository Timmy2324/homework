import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeTheme, Theme} from "./bll/themeReducer";
import {Dispatch} from "redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch<Dispatch>();
    const theme = useSelector<AppStoreType, Theme>(state => state.theme.theme);

    const onChangeCallback = (value: Theme) => {
        dispatch(changeTheme(value));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
