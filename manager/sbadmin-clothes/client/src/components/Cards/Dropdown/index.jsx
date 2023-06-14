const Dropdown = () => {
  return (
    <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Deseja realmente sair?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Confirma sua solicitação.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                    <a className="btn btn-primary" href="login.html">Sair</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dropdown;
