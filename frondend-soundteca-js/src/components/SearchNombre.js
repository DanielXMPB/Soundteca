const SearchNombre = ({ onSubmitNombre, nombre, onChangeBuscarNombre }) => {

    return (
        <form onSubmit={onSubmitNombre}>
            <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 250 }}>
                    <input type="text" className="form-control float-right" placeholder="Buscar por nombre"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={onChangeBuscarNombre}
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
    )
}

export default SearchNombre;