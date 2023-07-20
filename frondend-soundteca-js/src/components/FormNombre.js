const FormNombre = ({onSubmitNombre, nombreUsuario, onChangeActualizarNombre}) => {
    return (
        <div>
            <form onSubmit={onSubmitNombre}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nombre</label>
                    <input className="form-control"
                        placeholder="Nombre"
                        name="nombreUsuario"
                        id="nombreUsuario"
                        value={nombreUsuario}
                        onChange={onChangeActualizarNombre}
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-primary">Actualizar</button>
                </div>
            </form>
        </div>
    );
}

export default FormNombre;