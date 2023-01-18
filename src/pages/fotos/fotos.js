import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Fotos() {

    return (
    <>
        <Header />

        <div>
            <p className='p-fotos'>Sessão de fotos</p>
            <div className='fotos'>
                <div className='fotos-content'>
                    <div className='card foto-1'></div>
                    <div className='card foto-2'></div>
                    <div className='card foto-3'></div>
                    <div className='card foto-4'></div>
                    <div className='card foto-5'></div>
                    <div className='card foto-6'></div>
                </div>
            </div>

            <div className='button-pos'>
                <Link style={{textDecoration: 'none'}} to={'/'}><button className='button'>Voltar para a página inicial</button></Link>
            </div>
        </div>

        <Footer />
    </>
    )
}

export default Fotos;