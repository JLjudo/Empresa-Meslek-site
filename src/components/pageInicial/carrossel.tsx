import style from '../../styles/carrossel.module.css';
import '../../styles/carrossel.module.css';

// Utilizando swiper:
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/carrossel de Imagens/img1.jpg';
import img2 from '../../assets/carrossel de Imagens/img2.jpg';
import img3 from '../../assets/carrossel de Imagens/img3.jpg';
import img4 from '../../assets/carrossel de Imagens/img4.jpg';

export function Carrossel(){

    const data = [
        { id: '1', img: img1 },
        { id: '2', img: img2 },
        { id: '3', img: img3 },
        { id: '4', img: img4 }
    ]

    return(
        <>
            <Swiper
                effect='fade'
                autoplay
                spaceBetween={50}
                pagination={{clickable: true}}
                navigation={true}
                >
                {data.map( (item) => (
                    <SwiperSlide>
                        <img src={item.img} alt="slider" className={style.slide_item}/>
                    </SwiperSlide>
                ) )}
            </Swiper>
        </>
    )
}
