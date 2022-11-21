import { useState } from 'react'

import React from 'react'
import Input from '../form/input/Input'
import SubmitButton from '../form/submitButton/SubmitButton'
import styles from './UserForm.module.css';


function UserForm({ handleSubmit, btnText, userData }) {

    const [user, setUser] = useState(userData || {})

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(user)
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            
                    <Input type="text"
                        text="Nome"
                        name="firstName"
                        placeholder="Insira o nome"
                        handleOnChage={handleChange}
                        value={user.firstName ? user.firstName : ''}
                    />
                    <Input type="text"
                        text="Sobrenome"
                        name="lastName"
                        placeholder="Insira o sobrenome"
                        handleOnChage={handleChange}
                        value={user.lastName ? user.lastName : ''}
                    />
                    <Input type="email"
                        text="email"
                        name="email"
                        placeholder="Insira o nome do projeto"
                        handleOnChage={handleChange}
                        value={user.email ? user.email : ''}
                    />
                    <Input type="phone"
                        text="telefone"
                        name="phone"
                        placeholder="Insira o orçamento total"
                        handleOnChage={handleChange}
                        value={user.budget ? user.budget : ''}
                    />
                    <Input type="text"
                        text="Rua"
                        name="street"
                        placeholder="Insira o nome da rua"
                        handleOnChage={handleChange}
                        value={user.street ? user.street : ''}
                    />
                    <Input type="text"
                        text="Número"
                        name="streetNumber"
                        placeholder="Insira o número"
                        handleOnChage={handleChange}
                        value={user.streetNumber ? user.streetNumber : ''}
                    />
                    <Input type="text"
                        text="Cidade"
                        name="city"
                        placeholder="Insira a cidade"
                        handleOnChage={handleChange}
                        value={user.streetNumber ? user.streetNumber : ''}
                    />
                    <Input type="text"
                        text="CEP"
                        name="zipcode"
                        placeholder="Insira o CEP"
                        handleOnChage={handleChange}
                        value={user.zipcode ? user.zipcode : ''}
                    />
            <SubmitButton text={btnText}
            />
        </form>
    )
}

export default UserForm