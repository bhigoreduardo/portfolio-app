import SelectField from "../Inputs/SelectField";
import TextField from "../Inputs/TextField";

const TableSearch = () => {
  return (
    <div className="flex items-center justify-between flex-wrap p-3">
      <div className="w-full sm:w-auto">
        <SelectField id="count" label="Exibir por página" icon="fas fa-chevron-down" name="count" placeholder="Padrão" />
      </div>

      <div className="w-full sm:w-auto">
        <TextField id="search" label="" icon="fas fa-search" title="Pesquisar" name="search" placeholder="Pesquisar" />
      </div>
    </div>
  );
};

export default TableSearch;
