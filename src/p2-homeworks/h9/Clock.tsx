import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date());
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date && date.toLocaleTimeString();
    const stringDate = date && date.toLocaleDateString();

    return (
        <div>
            <div style={{height: '21px'}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>


                <div style={{height: '21px'}}>
                    {show && (
                    stringDate)}
                </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton red onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
