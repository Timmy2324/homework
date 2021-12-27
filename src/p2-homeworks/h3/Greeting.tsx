import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressAddUser, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : '';// need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser} className={inputClass + ' ' + s.input}/>
            <button disabled={!name} onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
