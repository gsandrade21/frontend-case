import React from 'react'
import Container from '../../layout/container/Container'
import UserCard from '../../userCard/UserCard'

import styles from './Users.module.css'

function Users() {
    return (
        <div className={styles.user_container}>
            <div className={styles.title_container}>
                <h1>Lista de usuários</h1>
            </div>
            <Container customClass="start">
            <UserCard
                    id={'12'}
                    name={'teste'}
                    email={'teste@test.com'}
                    key={'12'}
                />
            </Container>
        </div>

    )
}

export default Users