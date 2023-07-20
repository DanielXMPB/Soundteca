const SearchArtista = ({onSubmitAutor, autor, onChangeBuscarAutor}) => {

    return (
        <form onSubmit={onSubmitAutor}>
            <div className="card-tools" style={{marginRight: '20px'}}>
                <div className="input-group input-group-sm" style={{ width: 250 }}>
                    <input type="text" className="form-control float-right" placeholder="Buscar por artista"
                        name="autor"
                        id="autor"
                        value={autor}
                        onChange={onChangeBuscarAutor}
                        required
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchArtista;