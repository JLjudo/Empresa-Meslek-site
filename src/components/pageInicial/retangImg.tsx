import style from '../../styles/retangImg.module.css';

import img from '../../assets/retângulo de imagens/imgRetang.jpg';

export function RetangImg(){
    return <img src={img} alt="retangImg" className={style.imgRetang}/>
}
