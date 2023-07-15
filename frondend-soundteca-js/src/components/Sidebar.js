import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faListUl, faHeart, faGear } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="../../index3.html" className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                {/* Sidebar user (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <Link href="#" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <FontAwesomeIcon icon={faMusic} />
                                <p> </p>
                                <p>Canciones</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <FontAwesomeIcon icon={faHeart} />
                                <p> </p>
                                <p>Favoritos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <FontAwesomeIcon icon={faListUl} />
                                <p> </p>
                                <p>Playlist</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link">
                                <FontAwesomeIcon icon={faGear} />
                                <p> </p>
                                <p>Configuracion</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="../widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    Widgets
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon fas fa-copy" />
                                <p>
                                    Layout Options
                                    <i className="fas fa-angle-left right" />
                                    <span className="badge badge-info right">6</span>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../layout/top-nav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/top-nav-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation + Sidebar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/boxed.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Boxed</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/fixed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Sidebar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/fixed-sidebar-custom.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/fixed-topnav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Navbar</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/fixed-footer.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Footer</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../layout/collapsed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Collapsed Sidebar</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    UI Elements
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/icons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Icons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/buttons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Buttons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/sliders.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Sliders</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/modals.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Modals &amp; Alerts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/navbar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Navbar &amp; Tabs</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/timeline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Timeline</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../UI/ribbons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Ribbons</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Forms
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Advanced Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Editors</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Validation</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../tables/simple.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Simple Tables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../tables/data.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>DataTables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../tables/jsgrid.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>jsGrid</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                            <a href="../kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns" />
                                <p>
                                    Kanban Board
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                    Mailbox
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Inbox</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Compose</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Read</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    );
}

export default Sidebar;