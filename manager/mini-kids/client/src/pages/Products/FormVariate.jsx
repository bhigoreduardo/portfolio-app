/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { currencyPrice } from "../../utils/calculate";
import { status } from "../../utils";
import TextField from "../../components/Inputs/TextField";
import SelectField from "../../components/Inputs/SelectField";
import Modal from "../../components/Cards/Modal";

const variateSchema = yup.object().shape({
  color: yup.number().required("Cor é obrigatório"),
  size: yup.number().required("Tamanho é obrigatório"),
  coast: yup.number().required("Custo é obrigatório").typeError("Informe apenas números"),
  sale: yup.number().required("Venda é obrigatório").typeError("Informe apenas números"),
  discount: yup.number().optional().typeError("Informe apenas números"),
  stockMin: yup.number().optional().typeError("Informe apenas números"),
  stock: yup.number().required("Estoque é obrigatório").typeError("Informe apenas números"),
  status: yup.bool().required("Status é obrigatório"),
});

const FormVariate = ({ productId }) => {
  const [variates, setVariates] = useState([]);
  const [variate, setVariate] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const removeVariate = () => {
    api.get(`/variates/removeById?id=${itemSelected}`).then((res) => {
      if (res.status === 500) return toast.error(res.data.message);
      toast.success(res.data.message);

      setItemSelected("");
      setShowModal(false);
      getVariates();
    });
  }
  const getVariates = async () => {
    const { data } = await api.get(`/variates/findAll?product=${productId}`);
    setVariates(data);
  }
  const getSizes = async () => {
    const { data } = await api.get("/sizes/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setSizes(records);
  }
  const getColors = async () => {
    const { data } = await api.get("/colors/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setColors(records);
  }
  useEffect(() => {
    getVariates();
    getSizes();
    getColors();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const variateInitialValues = {
    color: variate.color || "",
    size: variate.size || "",
    coast: variate.coast || "",
    sale: variate.sale || "",
    discount: variate.discount || "",
    stockMin: variate.stockMin || "",
    stock: variate.stock || "",
    status: variate.status || "",
    product: productId,
  }
  const variateFormik = useFormik({
    enableReinitialize: true,
    initialValues: variateInitialValues,
    validationSchema: variateSchema,
    onSubmit: (values, onSubmitProps) => handleVariateSubmit(values, onSubmitProps)
  })
  const handleVariateSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    if (itemSelected !== "") {
      formData.append('id', itemSelected);
      api.post("/variates/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);

          onSubmitProps.resetForm();
          setVariate("");
          setItemSelected("");
          getVariates();
        });
    } else {
      api.post("/variates/save", formData)
      .then((res) => {
        if (res.status === 500) return toast.error(res.data.message);
        toast.success(res.data.message);

        onSubmitProps.resetForm();
        setVariate("");
        setItemSelected("");
        getVariates();
      })
    }
  }

  return (
    <form className="flex flex-wrap -mx-3" onSubmit={variateFormik.handleSubmit}>
      <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6">
            <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-funnel-dollar"></i>&nbsp;Variações de custo e estoque</p>
            <div className="flex flex-wrap py-3">
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <TextField id="coast" label="Custo" icon="fas fa-dollar-sign" title="Custo" name="coast" placeholder="Informe o preço de custo" errors={variateFormik.touched.coast && variateFormik.errors.coast} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.coast} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <TextField id="sale" label="Venda" icon="fas fa-donate" title="Venda" name="sale" placeholder="Informe o preço de venda" errors={variateFormik.touched.sale && variateFormik.errors.sale} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.sale} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <TextField id="discount" label="Desconto" icon="fas fa-tags" title="Desconto" name="discount" placeholder="Informe o desconto" errors={variateFormik.touched.discount && variateFormik.errors.discount} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.discount} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <TextField id="stockMin" label="Estoque mínimo" icon="fas fa-dolly" title="Estoque mínimo" name="stockMin" placeholder="Informe o estoque mínimo"errors={variateFormik.touched.stockMin && variateFormik.errors.stockMin} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.stockMin} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <TextField id="stock" label="Estoque" icon="fas fa-dolly-flatbed" title="Estoque" name="stock" placeholder="Informe o estoque" errors={variateFormik.touched.stock && variateFormik.errors.stock} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.stock} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                <SelectField id="color" label="Cor" icon="fas fa-coins" name="color" placeholder="Sem cor" dataList={colors} errors={variateFormik.touched.color && variateFormik.errors.color} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.color} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                <SelectField id="size" label="Tamanho" icon="fas fa-compress" name="size" placeholder="Sem tamanho" dataList={sizes} errors={variateFormik.touched.size && variateFormik.errors.size} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.size} />
              </div>
              <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                <SelectField id="variateStatus" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status" dataList={status} errors={variateFormik.touched.status && variateFormik.errors.status} onChange={variateFormik.handleChange} onBlur={variateFormik.handleBlur} value={variateFormik.values.status} />
              </div>
            </div>
            <div className="flex flex-wrap py-3 w-full max-w-full px-3 md:w-4/12">
              <button type="submit" className="inline-block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar variação</button>
            </div>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
          
          {
            !variates?.length > 0
              ? (
                <h6 className="dark:text-white text-center mb-6">Nenhuma variação adicionada</h6>
              ) : (
                <div className="flex flex-wrap py-3">
                  <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                    <div className="mb-4">
                      <div className="dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease w-full flex rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all flex-col gap-2 overflow-y-auto max-h-100">
                        <div>
                        <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                          <thead className="align-bottom">
                            <tr>
                              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Especificações</th>
                              <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Preço</th>
                              <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Estoques</th>
                              <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Vendas</th>
                              <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                              <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              variates.map((item, i) => (
                                <tr key={i}>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <div className="flex px-2 py-1">
                                      <div className="flex flex-col justify-center">
                                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.colorName}</h6>
                                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.sizeName}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{currencyPrice.format(item.sale)} (Venda)</p>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.discount)} (Desconto)</p>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.coast)} (Custo)</p>
                                  </td>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.stock} unids</p>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.stockMin || 0} unids</p>
                                  </td>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.orders || 0} vendas</p>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.ordersAmout || 0)}</p>
                                  </td>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 text-center align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <span className={`${item.status == 1 ? "from-emerald-500 to-teal-400" : "from-slate-600 to-slate-300"} bg-gradient-to-tl px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{item.status == 1 ? "Ativo" : "Inativo"}</span>
                                  </td>
                                  <td className={`${i === variates.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <button type="button" title="Editar" onClick={() => { setItemSelected(item.id); setVariate(item); }} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></button>
                                    <button type="button" title="Excluir" onClick={() => { setItemSelected(item.id); setShowModal(true); }} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></button>
                                  </td>
                                </tr>
                              ))
                            }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          }            
        </div>
      </div>

      {showModal && <Modal title="Deseja realmente excluir esta variação?" setShowModal={setShowModal} callback={removeVariate} />}
    </form>
  )
}

export default FormVariate