/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../button";

const CardTitle = ({ title, to }) => {
  return (
    <div className="flex flex-wrap">
      <h6 className="w-1/2 max-w-full dark:text-white">{title}</h6>
      <div className="w-1/2 max-w-full text-right">
        <Link to={to}>
          <Button className="dark:text-white text-slate-700 dark:border-white border-slate-700">
            Vê todos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardTitle;
