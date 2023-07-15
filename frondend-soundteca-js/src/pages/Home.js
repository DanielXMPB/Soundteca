import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <ContentHeader></ContentHeader>
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            Start creating your amazing application!
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            Footer
                        </div>
                        {/* /.card-footer*/}
                    </div>
                    {/* /.card */}
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;