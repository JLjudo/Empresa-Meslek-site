import logo from '../../assets/navBar/logoMeslek-removebg-preview.png';
import style from '../../styles/footer.module.css';

export function Footer(){
    return (
        <>
            
            <div className={style.lineFooter}>
                <div className={style.blocoFooter}>
                    {/* Logo */}
                    <div className={style.logo}>
                        <img src={logo} alt="logo-meslek" />
                    </div>
                    {/* Outras informações */}
                    <div className={style.redesSociais}>
                        <a href="#"><button><i className="bi bi-instagram"></i></button></a>
                        <a href="#"><button><i className="bi bi-google"></i></button></a>
                        <a href="#"><button><i className="bi bi-facebook"></i></button></a>
                    </div>
                    {/* E-mail */}
                    <div className={style.email}>
                        <p><i className="bi bi-envelope"></i> <a href="mailto:meslek.ST@gmail.com" className={style.textEmail}>meslek.ST@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}