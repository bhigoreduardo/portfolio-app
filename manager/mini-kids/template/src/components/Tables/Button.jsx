const TableButton = () => {
  return (
    <div className="flex items-center flex-wrap justify-between p-3">
      <span>Exibindo 1 até 6 de 57 totais</span>
      <div className="flex items-center gap-1">
        <button type="button" className="bg-gradient-to-tl text-white from-blue-500 to-violet-500 inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">1</button>
        <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">2</button>
        <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">3</button>
        <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">4</button>
      </div>
    </div>
  );
};

export default TableButton;
