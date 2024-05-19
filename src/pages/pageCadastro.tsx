import Style from '../styles/pageCadastro/userCad.module.css';

import { Footer } from '../components/pageInicial/footer';

export function PageCadastro(){
    return (
        <>
        <div id={Style.blocoVerde}></div>
        <div className={Style.interface}>
            <div className={Style.blocoCad}>
                <div>
                    <h1> Cadastro </h1>
                </div>
                <div className={Style.form}>
                    <form action="" method="post">
                        <div className={Style.row}>
                            <p><input type="text" placeholder=' Usuário' /></p>
                            <p><input type="email" placeholder=' E-mail' /></p>
                        </div>
                        <div className={Style.row}>
                            <p><input type="password" placeholder=' Senha' /></p>
                            <p><input type="password" placeholder=' Confirmar senha' /></p>
                        </div>
                        <div className={Style.botao}>
                            <button type="submit" className={Style.btnCad}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
        </>
    )
}
