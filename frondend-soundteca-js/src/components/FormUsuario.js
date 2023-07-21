const FormUsuario = ({ name, onSubmit, propUsuario, onChangeActualizar}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nombre</label>
                    <input className="form-control"
                        placeholder={name}
                        name={`${name}Usuario`}
                        id={`${name}Usuario`}
                        value={propUsuario}
                        onChange={onChangeActualizar}
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-primary">Actualizar</button>
                </div>
            </form>
        </div>
    );
}

export default FormUsuario;