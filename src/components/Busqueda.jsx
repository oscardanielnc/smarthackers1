import React from "react";
import { Link } from "react-router-dom";
import '../styles/Busqueda.css'
import '../fuentes/style.css'

//Data = null

export default class Busqueda extends React.Component {
    render() {
        return (
            <div className="Busqueda">
                <div className="Busqueda-contenido">
                    <div className="titulo">
                        <h2>Smart Hackers 2022</h2>
                    </div>
                    <div className="subtitulo">
                        <h4>Genera perfiles con un solo click</h4>
                    </div>
                    <div className="buscador">
                        <input type="text" className="buscador-text"
                            placeholder="Ingresar link de Linkedin"/>
                        <Link to="/resultado" className="buscador-buttom">
                            <button className="buscador-buttom-bu"/>
                            <span className="buscador-icon icon-search"></span>
                        </Link>
                    </div>
                </div>
                <div className="Busqueda-footer">
                    <div className="Busqueda-footer-content">
                        <div className="Nosotros">
                            <h3>Acerca de nosotros</h3>
                            <p>Somos un grupo de estudiantes entusiastas de la tecnología 😎</p>
                        </div>
                        <div className="Panda">
                            <img src="https://i.imgur.com/psxC0Yb.png" alt="pandita.png" />
                        </div>
                        <div className="Contacto">
                            <h3>Contacto</h3>
                            <a href="https://www.linkedin.com/in/oscardnavarro/" className="icon-linkedin">Oscar Navarro</a>
                            <a href="https://www.linkedin.com/in/renzorichle23/" className="icon-linkedin">Renzo Richle</a>
                            <a href="https://www.linkedin.com/in/john-soto-b30284163/" className="icon-linkedin">John Soto</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 