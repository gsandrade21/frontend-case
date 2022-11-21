import styles from './UserCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { NavLink } from  'react-router-dom'

function UserCard({id, name, email, handleRemove}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    
    return (
    <div className={styles.user_cartd}>
        <h4>{name}</h4>
        <p>
            <span>email:</span> {email}
        </p>
        <div className={styles.user_cartd_actions}>
            <NavLink to={`/user/${id}`}>
                <BsPencil/> Editar
            </NavLink>
           <button onClick={remove}>
            <BsFillTrashFill /> Excluir
           </button>
        </div>
    </div>)
}

export default UserCard