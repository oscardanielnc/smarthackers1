import React from "react";
import Data from '../data/index.json'
import '../styles/Resultado.css'

//Data = null

export default class resultado extends React.Component {
    render() {
        if(Data) {
            return (
                <div className="Resultado">
                    <div className="Resultado-page">
                        <div className="Perfil">
                            <div className="Perfil-nombre-descarga">
                                <div className="Perfil-nombre">
                                    <span>{Data.nombre} {Data.apellido}</span>
                                </div>
                                <div className="Perfil-triangulo"></div>
                                <div className="Perfil-descarga">
                                    <span className={`icon-cloud-download icon-nube`}></span>
                                </div>
                            </div>
                            <div className="Perfil-basico">
                                <div className="Perfil-basico-imgContainer">
                                    <img src={Data.img} alt="user.jpg"/>
                                    <div className="Perfil-basico-datos">
                                        <p><strong>Especialidad: </strong>{Data.especialidad? Data.especialidad: "Desconocida"}</p>
                                        <p><strong>Nacionalidad: </strong>{Data.nacionalidad? Data.nacionalidad: "Desconocida"}</p>
                                        <p><strong>Edad: </strong>{Data.edad? Data.edad + " años": "Desconocida"}</p>
                                    </div>
                                </div>
                                <div className="Perfil-basico-info">
                                    {Data.informacion.map((item, key) => <p key={key}>{item}</p>)}
                                </div>
                            </div>
                            <div className="Perfil-historial">
                                <div className="Perfil-historial-colunm left">
                                    <div className="Perfil-historial-row">
                                        <h4>Personalidad</h4>
                                        <div className="Perfil-historial-list">
                                            {Data.personalidad.map((item, key) => <p key={key}>{item}</p>)}
                                        </div>
                                    </div>
                                    <div className="Perfil-historial-row">
                                        <h4>Habilidades</h4>
                                        <div className="Perfil-historial-list b">
                                            {Data.habilidades.map((item, key) => <p key={key}>{item}</p>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="Perfil-historial-colunm right">
                                    <div className="Perfil-historial-row">
                                        <h4>REDES<br/><strong>Sociales</strong></h4>
                                        {
                                            Data.redes.map((item, key) =><span key={key} className={`icon-${item} icon-redes-estilos`}></span>)
                                        }
                                    </div>
                                    <div className="Perfil-historial-row">
                                        <h4>NAVEGADORES<br/><strong>Web</strong></h4>
                                        {
                                            Data.navegadores.map((item, key) =><span key={key} className={`icon-${item} icon-redes-estilos`}></span>)
                                        }
                                    </div>
                                    <div className="Perfil-historial-row">
                                        <h4>DISPOSITIVOS<br/><strong>Marca</strong></h4>
                                        {
                                            Data.dispositivos.map((item, key) =><span key={key} className={`icon-${item} icon-redes-estilos`}></span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="Perfil-destacado">
                                <h3>DATOS A DESTACAR</h3>
                                {
                                    Data.destacar.map((item, key) => <li key={key}>{item}</li>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>No se han encontrado resultados con este enlace.</div>
        )
    }
} 