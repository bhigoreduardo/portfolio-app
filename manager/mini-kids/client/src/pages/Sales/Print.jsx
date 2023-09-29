import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";

import api from "../../libs/api";
import { currencyPrice } from "../../utils/calculate";

const Print = () => {
  const { id } = useParams();
  const [system, setSystem] = useState("");
  const [sale, setSale] = useState([]);

  const getStore = async () => {
    const { data } = await api.get("/system/findById");
    setSystem(data);
  }
  const getSale = async () => {
    const { data } = await api.get(`/sales/findById?id=${id}`);
    setSale([]);
    await data.map((item) => {
      setSale((prevState) => {
        const findedIndex = prevState?.findIndex((value) => value?.id === item.id);

        if (findedIndex === -1) {
          return [...prevState, {
            id: item.id,
            amount: item.amount,
            offerAmount: item.offerAmount,
            payment: item.payment,
            createdAt: item.createdAt,
            amountPayment: item.amountPayment,
            variates: [{
              sku: item.sku,
              color: item.color,
              price: item.price,
              product: item.product,
              quantity: item.quantity,
              size: item.size,
              subAmount: item.subAmount,
            }]
          }]
        }

        return prevState.filter((value, i) => i !== findedIndex
          ? value
          : value.variates.push({
            sku: item.sku,
            color: item.color,
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            subAmount: item.subAmount,
          }))
      })
    })
  }
  const print = async () => {
    const element = document.querySelector(".element-to-print");

    const options = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        orientation: "p",
        unit: "mm",
        format: "dl",
        putOnlyUsedFonts: true,
        floatPrecision: 16,
      },
    };
    // html2pdf().set(options).from(element).save();
    html2pdf().set(options).from(element).toPdf().get("pdf").then(function (pdfObj) {
      pdfObj.autoPrint();
      window.open(pdfObj.output("bloburl"), "_blank");
    });
  };

  useEffect(() => {
    getSale();
    getStore();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-2 p-2 bg-white dark:bg-slate-850 min-h-screen">
      <div className="flex items-center justify-center">
        <button type="button" onClick={print} className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Imprimir</button>
      </div>
      <div className="element-to-print">
        <table className="p-3 mx-auto w-full max-w-[400px] text-sm font-light leading-tight">
          <thead className="my-4">
            <tr><th className="text-base font-light" colSpan="3">{system.name}</th></tr>
            <tr><th colSpan="3" className="font-light">{system.cnpj}</th></tr>
            <tr><th colSpan="3" className="font-light">{system.address} - {system.city}/{system.state}</th></tr>
            <tr><th colSpan="3" className="font-light">{system.zipCode} - n° {system.number}</th></tr>
            <tr><th colSpan="3" className="font-light border-b border-dashed border-[#bcbcbc]">{system.mobile}</th></tr>
            <tr><th colSpan="3" className="uppercase font-bold p-2 border-b border-dashed border-[#bcbcbc]">Cupom não fiscal</th></tr>
          </thead>

          <tbody className="mt-4">
            {
              sale[0]?.variates?.map((item, i) => (
                <React.Fragment key={i}>
                  <tr className="font-semibold"><td colSpan="3">{item.sku} - {item.product} TAM: {item.size} COR: {item.color}</td></tr>
                  <tr className="pb-2">
                    <td>{currencyPrice.format(item.price)}</td>
                    <td>{item.quantity} un</td>
                    <td>{currencyPrice.format(item.subAmount)}</td>
                  </tr>
                </React.Fragment>
              ))
            }
          </tbody>

          <tfoot className="mt-4">
            <tr className="uppercase font-semibold p-2 border-b border-dashed border-[#bcbcbc]"><td colSpan="3">Total</td></tr>
            <tr className="uppercase">
              <td colSpan="2">Descontos</td>
              <td align="right">{currencyPrice.format(sale[0]?.offerAmount)}</td>
            </tr>
            <tr className="uppercase">
              <td colSpan="2">Total</td>
              <td align="right">{currencyPrice.format(sale[0]?.amount)}</td>
            </tr>
            <tr className="uppercase font-semibold p-2 border-b border-dashed border-[#bcbcbc]"><td colSpan="3">Pagamentos</td></tr>
            <tr className="uppercase">
              <td colSpan="2">{sale[0]?.payment}</td>
              <td align="right">{currencyPrice.format(sale[0]?.amount)}</td>
            </tr>
            {
              sale[0]?.amountPayment && (
                <>
                <tr className="uppercase">
                  <td colSpan="2">Total pago</td>
                  <td align="right">{currencyPrice.format(sale[0]?.amountPayment)}</td>
                </tr>
                <tr className="uppercase">
                  <td colSpan="2">Troco</td>
                  <td align="right">{currencyPrice.format(sale[0]?.amountPayment - sale[0]?.amount)}</td>
                </tr>
                </>
              )
            }
            <tr><td colSpan="3" align="center">Pedido: {id}</td></tr>
            <tr className="border-b border-dashed border-[#bcbcbc]"><td colSpan="3" align="center">{new Date(sale[0]?.createdAt).toLocaleString()}</td></tr>
            <tr className="border-b border-dashed border-[#bcbcbc]"><td colSpan="3" align="center">{system.site}</td></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Print;
