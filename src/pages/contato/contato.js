import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/OIP.png'
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { ImFacebook, ImWhatsapp } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'



function Contato() {

    return (
        <>
            <Header />

                <div id="contact">
                    <div className='postContato'>
                        
                    </div>

                    <div className="contact-us">
                        <p className="tel">Fone: (83) 99659-2451</p>
                        <p className="mail">E-mail: leopontes.1989@gmail.com</p>
                    <div className="icons">                            
                        <ul>
                            <li><Link to={'#'}></Link><ImFacebook /></li>
                            <li><Link to={'#'}></Link><ImWhatsapp /></li>
                            <li><Link to={'#'}></Link><BsLinkedin /></li>
                        </ul>
                    </div>

                        <div className="button-pos">
                            <Link style={{textDecoration: 'none'}} to={'/'}>
                            <button className="button">Voltar para a página inicial</button>
                            </Link>
                        </div>
                    </div>

                    
                </div>

                <Footer />
   
        </>  

    )
}

export default Contato;