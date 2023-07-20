const ModalReproducir = ({ reproduccion }) => {
    return (
        <div className="modal fade" id="modalReproduciir" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ borderRadius: '15px' }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Reproductor</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                        <button type="button" style={{ borderRadius: '15px' }}
                        className="btn btn-secondary" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body">
                        <div className="wrapperPlay" style={{ margin: '0 auto' }}>
                            <div className="top-bar">
                                <i className="material-icons">expand_more</i>
                                <span>Reproduciendo</span>
                                <i className="material-icons">more_horiz</i>
                            </div>
                            <div className="img-area"  style={{ margin: '25px auto' }}>
                                <img src={reproduccion.portada} alt="Portada" />
                            </div>
                            <div className="song-details">
                                <p className="name">{reproduccion.nombre}</p>
                                {
                                    reproduccion.artistas.map((artista, index) => (
                                        <span className="artist" key={index}>{artista}<br /></span>
                                    ))
                                }
                            </div>
                            <div className="progress-area">
                                <div className="progress-bar" style={{ width: '0.32228%' }}>
                                    <audio id="main-audio" src="songs/music-1.mp3" />
                                </div>
                                <div className="song-timer">
                                    <span className="current-time">0:00</span>
                                    <span className="max-duration">4:00</span>
                                </div>
                            </div>
                            <div className="controls">
                                <i id="repeat-plist" className="material-icons" title="Playlist looped">repeat</i>
                                <i id="prev" className="material-icons">skip_previous</i>
                                <div className="play-pause">
                                    <i className="material-icons play">play_arrow</i>
                                </div>
                                <i id="next" className="material-icons">skip_next</i>
                                <i id="more-music" className="material-icons">queue_music</i>
                            </div>
                            <div className="music-list">
                                <div className="header">
                                    <div className="row">
                                        <i className="list material-icons">queue_music</i>
                                        <span>Music list</span>
                                    </div>
                                    <i id="close" className="material-icons">close</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalReproducir;