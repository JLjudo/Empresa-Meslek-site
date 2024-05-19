import { Link } from 'react-router-dom';
import logo from '../../assets/navBar/logoMeslek-removebg-preview.png';
import style from '../../styles/navBar.module.css';

export function NavBar(){
    return (
        <>
            <div className={style.navbar}>
                <div >
                <Link to='/'>
                    <a> <img src={logo} alt="logoMeslek" className={style.logo}/> </a>
                </Link>
                </div> {/* Logo */}
                <div className={style.btns}>
                <Link to='cadastrar'>
                    <button className={style.botoes}> Cadastrar </button>
                </Link>
                <Link to='login'>
                    <button className={style.botoes}> Entrar </button>
                </Link>
                </div> {/* Botões */}
            </div>
        </>
    )
}
