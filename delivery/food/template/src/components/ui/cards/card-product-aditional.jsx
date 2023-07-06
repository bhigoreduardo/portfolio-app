/* eslint-disable react/prop-types */
import { additionalEnum } from "@/types/product";
import Checkbox from "../inputs/checkbox";
import Radiobox from "../inputs/radiobox";

const CardProductAditional = ({ type, name, description, limit, obligatory, option }) => {
  return (
    <div className="border-b border-slate-200 my-2 pb-2">
      <HeaderProductAditional name={name} description={description} limit={limit} obligatory={obligatory} />
      {type === additionalEnum.CheckGroup ? (
        option?.map((item, i) => (
          <BodyProductAditionalCheckGroup key={i} {...item} />
        ))
      ) : type === additionalEnum.NumberGroup ? (
        option?.map((item, i) => (
          <BodyProductAditionalNumberGroup key={i} {...item} />
        ))
      ) : type === additionalEnum.RadioGroup && (
        option?.map((item, i) => (
          <BodyProductAditionalRadioGroup key={i} {...item} />
        ))
      )
      }
    </div>
  );
};

export default CardProductAditional;

const HeaderProductAditional = ({ name, description, limit, obligatory }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-1">
      <div>  
        <h5 className="text-base font-semibold">{name}</h5>
        <p className="text-sm">{description}</p>
        <span className="text-xs">Escolha até {limit}</span>
      </div>
      <div className="flex flex-col items-end gap-1">
        {obligatory && (<p>Obrigatório: {obligatory}</p>)}
        <span className="text-xs">0/1</span>
      </div>
    </div>
  ) 
}

const BodyProductAditionalCheckGroup = ({ name, description, price }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex flex-col">
        <h5 className="text-base font-semibold">{name}</h5>
        <span className="text-xs">{description}</span>
        <span className="text-xs">{price}</span>
      </div>
      <Checkbox />
    </div>
  )
}

const BodyProductAditionalRadioGroup = ({ name, description, price }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex flex-col">
        <h5 className="text-base font-semibold">{name}</h5>
        <span className="text-xs">{description}</span>
        <span className="text-xs">{price}</span>
      </div>
      <Radiobox name="name" />
    </div>
  )
}

const BodyProductAditionalNumberGroup = ({ name, description, price }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex flex-col">
        <h5 className="text-base font-semibold">{name}</h5>
        <span className="text-xs">{description}</span>
        <span className="text-xs">{price}</span>
      </div>
      <div className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-md">
        <button type="button">
          <i className="fas fa-minus text-gray-600 h-4 w-4"></i>
        </button>

        <span>5</span>

        <button type="button">
          <i className="fas fa-plus text-[#00ccbb] h-4 w-4"></i>
        </button>
      </div>
    </div>
  )
}