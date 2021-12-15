import React from 'react'
import classes from './Message.module.css'

type MessagePropsTypes = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsTypes) {
    return (
        <div className={classes.user_message}>
            <div className={classes.avatar_wrapper}>
                <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            </div>
            <div className={classes.message_wrapper}>
                <h3 className={classes.title}>{props.name}</h3>
                <div className={classes.message}>
                    <p className={classes.text}>{props.message}</p>
                    <span className={classes.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
