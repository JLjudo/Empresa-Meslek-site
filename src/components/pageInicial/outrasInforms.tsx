import style from '../../styles/outrasInforms.module.css';

export function OutrasInforms(){
    return (
        <>
            <h1>Mais Informações</h1>
            <div className={style.flex}>
                <div className={style.mapa}>
                    {/* Terá uma imagem de mapa */}
                    <p>Exemplo de mapa</p>
                </div>
                <div className={style.informs}>
                    <div className={style.row}>
                        <div className={style.blocos}>
                            <div><h3>Icon</h3></div>
                            <div><h3>Titulo da informação</h3></div>
                            <div><p>Outras informações que serão adicionadas futuramente.</p></div>
                        </div>
                        <div className={style.blocos}>
                            <div><h3>Icon</h3></div>
                            <div><h3>Titulo da informação</h3></div>
                            <div><p>Outras informações que serão adicionadas futuramente.</p></div>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.blocos}>
                            <div><h3>Icon</h3></div>
                            <div><h3>Titulo da informação</h3></div>
                            <div><p>Outras informações que serão adicionadas futuramente.</p></div>
                        </div>
                        <div className={style.blocos}>
                            <div><h3>Icon</h3></div>
                            <div><h3>Titulo da informação</h3></div>
                            <div><p>Outras informações que serão adicionadas futuramente.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
