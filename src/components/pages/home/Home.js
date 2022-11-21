import React from 'react'
import styles from './Home.module.css';
import target from '../../../img/target.png';
import LinkButton from '../../layout/linkButton/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Customer</span> </h1>
            <p>Comece a gerenciar os seus usuários agora mesmo!</p>
            <LinkButton to="/newUser" text="Cadastrar usuário"/>
            <img src={target} alt="Costs"/>
        </section>
  )
}

export default Home