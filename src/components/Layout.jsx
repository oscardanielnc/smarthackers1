import React from "react";
import { Link } from "react-router-dom";
import '../styles/Layout.css'

export default function Layout(props) {
    return ( 
        <React.Fragment>
            <div className="Header">
                <div className="Titulo">
                    <h1>DeepPanda</h1>
                </div>
                <div className="Menu">
                    <Link className="Menu-opcion" to="/" >Inicio</Link>
                    <Link className="Menu-opcion" to="/" >Acerca de nosotros</Link>
                    <Link className="Menu-opcion" to="/" >Contacto</Link>
                </div>
            </div>
            {props.children}
        </React.Fragment>
    )
}