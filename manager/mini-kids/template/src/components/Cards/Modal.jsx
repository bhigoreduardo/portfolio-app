const Modal = () => {
  return (
    <div className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear opacity-0 z-sticky outline-0" id="import">
      <div className="relative w-auto m-2 transition-transform duration-300 ease-out pointer-events-none sm:m-7 sm:max-w-125 sm:mx-auto lg:mt-48 -translate-y-13">
        <div className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto dark:bg-gray-950 bg-clip-padding border-black/20 rounded-xl outline-0">
          <div className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl">
            <h5 className="mb-0 leading-normal dark:text-white" id="ModalLabel">Deseja realmente sair?</h5>
            <i className="ml-4 fas fa-upload"></i>
            <button type="button" data-toggle="modal" data-target="#import" className="fa fa-close w-4 h-4 ml-auto box-content p-2 text-black dark:text-white border-0 rounded-1.5 opacity-50 cursor-pointer -m-2 " data-dismiss="modal"></button>
          </div>
          <div className="relative flex-auto p-4">
            <p>Confirma sua solicitação.</p>
            <input action="/file-upload" type="text" placeholder="Browse file..." className="dark:bg-gray-950 mb-4 focus:shadow-primary-outline dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
            <div className="min-h-6 mb-0.5 block">
              <input className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" type="checkbox" value="" id="importCheck" />
              <label className="inline-block mb-2 ml-1 text-xs font-bold cursor-pointer select-none text-slate-700 dark:text-white/80" htmlFor="importCheck">I accept the terms and conditions</label>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end p-3 border-t border-solid shrink-0 border-slate-100 rounded-b-xl">
            <button type="button" data-toggle="modal" data-target="#import" className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg cursor-pointer leading-pro tracking-tight-rem bg-slate-400 shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Cancelar</button>
            <button type="button" data-toggle="modal" data-target="#import" className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg cursor-pointer leading-pro tracking-tight-rem shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
