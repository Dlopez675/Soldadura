import React from 'react'
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGOTIPO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICIOS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EMPRESA
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Historia</a></li>
                                <li><a className="dropdown-item" href="#">Mision y Vision</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTANOS</a>
                        </li>                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
