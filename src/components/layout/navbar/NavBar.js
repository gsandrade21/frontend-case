import {NavLink} from 'react-router-dom';

import React from 'react'
import Container from '../container/Container';

import styles from './NavBar.module.css';
import logo from '../../../img/target_log.png';

function NavBar(props) {
  return (
    <nav className={styles.navbar}>
        <Container>
        <NavLink to="/"><img src={logo} alt="Costs"/></NavLink>
        <ul className={styles.list}>
                <li className={styles.item}>
                <NavLink to="/" >Home</NavLink>
                </li>
                <li className={styles.item}>
                <NavLink to="/users" >Usuários</NavLink>
                </li>
                <li className={styles.item}>
                <NavLink to="/contact" >Contato</NavLink>
                </li>
            </ul>
        </Container>
    </nav>
  )
}

export default NavBar