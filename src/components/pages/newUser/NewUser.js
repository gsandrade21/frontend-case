import React from 'react'
import UserForm from '../../userForm/UserForm';
import styles from './NewUser.module.css';

function NewUser() {
  return (
    <div className={styles.newuser_container}>
        <h1>Cadastrar novo usuário</h1>
        <UserForm  btnText="Criar usuário"/>
    </div>
  )
}

export default NewUser