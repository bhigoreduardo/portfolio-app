/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

import { currencyPrice } from "@/utils/transform";
import CardProductAditional from "./card-product-aditional";
import Textarea from "../inputs/textarea";

const CardProductDetail = ({ name, description, image, price, promotion, reviewsAvg, additional }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-1/4">
          <img src={image} className="bg-white h-20 w-20 rounded-xl" />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="mb-0 text-xs font-semibold leading-tight"><i className="mr-1 fas fa-shopping-cart"></i>{name}</p>
          <span className="text-xs leading-tight truncate">
            {promotion ? (
              <>
              <span className="font-semibold mr-3">{currencyPrice.format(promotion)}</span>
              <span className="font-semibold line-through">{currencyPrice.format(price)}</span>
              </>
            ) : (
              <span className="font-semibold">{currencyPrice.format(price)}</span>
            )}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs leading-tight font-semibold">{reviewsAvg}</span>
            <ReactStars count={5} size={16} value={reviewsAvg} edit={false} activeColor="#ffd700" />
          </div>
          <p className="mb-1 text-sm leading-normal text-slate-900">{description}</p>
        </div>
      </div>
      {additional?.map((item, i) => (
        <CardProductAditional key={i} {...item} />
      ))}
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-base font-semibold">Alguma observação?</span>
        <span className="text-xs">Importante! Para pedir adicionais, use as opções acima.</span>
        <Textarea placeholder="Alguma preferência ou observação? Digite aqui..." />
      </div>
    </div>
  );
};

export default CardProductDetail;
