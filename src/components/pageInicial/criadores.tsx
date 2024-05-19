import style from '../../styles/criadores.module.css';

import kalineImg from '../../assets/criadores/Kaline.jpg';
import micaelleImg from '../../assets/criadores/Micaelle.jpg';
import mariaImg from '../../assets/criadores/Maria.jpg';
import joaoImg from '../../assets/criadores/JoãoLucas.jpg';
import larissaImg from '../../assets/criadores/Larissa.jpg';

export function Criadores(){
    return (
        <>
            <h1 className={style.titulo}>Criadores</h1>
            <div className={style.cardDirec}>
                <div className={style.row}>
                    <div className={style.cards}>
                        <div className={style.cardImg}>
                            <img src={kalineImg} alt="" />
                        </div>
                        <div className={style.informsCards}>
                            <h3>Kaline</h3>
                            <h3>Analista</h3>
                            <p>Instituição de ensino: EEEP Amélia Figueiredo de Lavor</p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.cardImg}>
                            <img src={micaelleImg} alt="" />
                        </div>
                        <div className={style.informsCards}>
                            <h3>Micaelle</h3>
                            <h3>Gerente</h3>
                            <p>Instituição de ensino: EEEP Amélia Figueiredo de Lavor</p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.cardImg}>
                            <img src={mariaImg} alt="" />
                        </div>
                        <div className={style.informsCards}>
                            <h3>Maria Eugênia</h3>
                            <h3>Designer</h3>
                            <p>Instituição de ensino: EEEP Amélia Figueiredo de Lavor</p>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.cards}>
                        <div className={style.cardImg}>
                            <img src={joaoImg} alt="" />
                        </div>
                        <div className={style.informsCards}>
                            <h3>João Lucas</h3>
                            <h3>Programador</h3>
                            <p>Instituição de ensino: EEEP Amélia Figueiredo de Lavor</p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.cardImg}>
                            <img src={larissaImg} alt="" />
                        </div>
                        <div className={style.informsCards}>
                            <h3>Larissa</h3>
                            <h3>Tester</h3>
                            <p>Instituição de ensino: EEEP Amélia Figueiredo de Lavor</p>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
