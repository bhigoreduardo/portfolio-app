/* eslint-disable react/prop-types */
const FormTitle = ({ goBack, disabled }) => {
  return (
    <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
      <div className="flex items-center justify-end gap-4">
        <a href={goBack} className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-emerald-600 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Voltar</a>
        <button type="submit" disabled={disabled} className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar</button>
      </div>
    </div>
  );
};

export default FormTitle;
