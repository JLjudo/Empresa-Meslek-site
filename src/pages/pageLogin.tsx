import { Link } from 'react-router-dom';

import Style from '../styles/pageLogin/userLogin.module.css';

import { Footer } from '../components/pageInicial/footer';

export function PageLogin(){
    return (
        <>
        <div id={Style.blocoVerde}></div>
        <div className={Style.interface}>
            <div className={Style.blocoCad}>
                <div>
                    <h1> Login </h1>
                </div>
                <div className={Style.form}>
                    <form action="" method="post">
                        <div>
                            <p><input type="text" placeholder=' Usuário' /></p>
                            <p><input type="password" placeholder=' Senha' /></p>
                        </div>
                        <div>
                            <Link to='esqueceuSenha'>
                                <a>Esqueceu a senha?</a>
                            </Link>
                        </div>
                        <div className={Style.botao}>
                            <button type="submit" className={Style.btnCad}>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer className={Style.footer}>
            <Footer />
        </footer>
        </>
    )
}
