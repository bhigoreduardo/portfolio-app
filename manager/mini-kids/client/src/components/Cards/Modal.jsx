/* eslint-disable react/prop-types */
const Modal = ({ title, setShowModal, callback }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear z-sticky outline-0" id="import">
      <div className="relative w-auto m-2 transition-transform duration-300 ease-out pointer-events-none sm:m-7 sm:max-w-125 sm:mx-auto lg:mt-48 -translate-y-13">
        <div className="relative flex flex-col w-full bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl border border-solid pointer-events-auto dark:bg-gray-950 bg-clip-padding border-black/20 rounded-xl outline-0">
          <div className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl">
            <h5 className="mb-0 leading-normal dark:text-white" id="ModalLabel">{title}</h5>
          </div>
          <div className="relative flex-auto p-4">
            <p>Caso não queira continuar com a ação, selecione <b className="uppercase">Cancelar</b></p>
          </div>
          <div className="flex flex-wrap items-center justify-end p-3 border-t border-solid shrink-0 border-slate-100 rounded-b-xl">
            <button type="button" onClick={() => setShowModal(false)} className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg cursor-pointer leading-pro tracking-tight-rem bg-slate-400 shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Cancelar</button>
            <button type="button" onClick={() => callback()} className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg cursor-pointer leading-pro tracking-tight-rem shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
