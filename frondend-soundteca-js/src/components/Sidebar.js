import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faListUl, faHeart, faGear, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { Link, } from "react-router-dom";

const Sidebar = ({nombre}) => {

    return (
        <aside className="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4">
            <div className="brand-link">
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faRecordVinyl} />
                &nbsp;&nbsp;&nbsp;
                <span className="brand-text font-weight-light">Soundteca</span>
            </div>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <Link className="d-block">{nombre}</Link>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                <FontAwesomeIcon icon={faMusic} />
                                &nbsp;&nbsp;&nbsp;
                                <p>Canciones</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/favoritos"} className="nav-link">
                                <FontAwesomeIcon icon={faHeart} />
                                &nbsp;&nbsp;&nbsp;
                                <p>Favoritos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <FontAwesomeIcon icon={faListUl} />
                                &nbsp;&nbsp;&nbsp;
                                <p>Playlist</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/configuracion"} className="nav-link">
                                <FontAwesomeIcon icon={faGear} />
                                &nbsp;&nbsp;&nbsp;
                                <p>Configuracion</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;