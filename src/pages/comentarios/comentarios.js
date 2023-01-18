import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './styles.css'


function Comentarios() {

    
    return (
        <>
            <Header />

            <div id="coments">
                <p>Área de comentários e sugestões...</p>
                <form action="" method="post">
                    <textarea name="" id="textarea" cols="30" rows="20" placeholder="Escreva aqui seu comentário..."></textarea>
                </form>

                <div className="button-pos">
                    <Link to={'#'}><button class="button">Enviar</button></Link>
                </div>
                <div className="button-pos">
                    <Link to={'/'}><button class="button">Voltar para a página inicial</button></Link>
                </div>
            </div>
            

            <Footer />

        </>
            

    )
}

export default Comentarios;