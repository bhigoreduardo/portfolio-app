import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { status } from "../../utils";
import AreaField from "../../components/Inputs/AreaField";
import SelectField from "../../components/Inputs/SelectField";
import TextField from "../../components/Inputs/TextField";
import Layout from "../../components/Layout";
import FormTitle from "../../components/Navigation/FormTitle";

const systemSchema = yup.object().shape({
  email: yup.string().email("Informe um email válido").required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().optional(),
  phone: yup.number().optional().typeError("Informe apenas números"),
  mobile: yup.number().required("Celular é obrigatório").typeError("Informe apenas números"),
  site: yup.string().optional(),
  cnpj: yup.number().optional().typeError("Informe apenas números"),
  ie: yup.number().optional().typeError("Informe apenas números"),
  address: yup.string().required("Endereço é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  state: yup.string().required("Estado é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  zipCode: yup.number().required("CEP é obrigatório").typeError("Informe apenas números"),
  number: yup.string().optional(),
  complement: yup.string().optional(),
  status: yup.bool().required("Status é obrigatório"),
  obs: yup.string().optional(),
});

const System = () => {
  const [system, setSystem] = useState([]);
  const getSystem = async () => {
    const { data } = await api.get(`/system/findById`);
    setSystem(data);
  }
  useEffect(() => {
    getSystem();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const systemInitialValues = {
    email: system.email,
    name: system.name,
    lastName: system.lastName,
    phone: system.phone,
    mobile: system.mobile,
    site: system.site,
    cnpj: system.cnpj,
    ie: system.ie,
    address: system.address,
    city: system.city,
    state: system.state,
    neighborhood: system.neighborhood,
    zipCode: system.zipCode,
    number: system.number,
    complement: system.complement,
    status: system.status,
    obs: system.obs,
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: systemInitialValues,
    validationSchema: systemSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }
    formData.append('id', system.id);

    api.post("system/updateById", formData)
      .then((res) => {
        if (res.status === 500) return toast.error(res.data.message);
        toast.success(res.data.message);
      })
  }

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/" />
            
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="email" label="Email" icon="fas fa-envelope" title="Email" name="email" placeholder="Informe o email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome fantasia" icon="fas fa-user" title="Nome fantasia" name="name" placeholder="Informe o nome fantasia" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="lastName" label="Razão social" icon="fas fa-user" title="Razão social" name="lastName" placeholder="Informe a razão social" errors={formik.touched.lastName && formik.errors.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="phone" label="Telefone" icon="fas fa-phone" title="Telefone" name="phone" placeholder="Informe o telefone" errors={formik.touched.phone && formik.errors.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="mobile" label="Celular" icon="fas fa-mobile-alt" title="Celular" name="mobile" placeholder="Informe o celular" errors={formik.touched.mobile && formik.errors.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="site" label="Site" icon="fas fa-globe-americas" title="Site" name="site" placeholder="Informe o site" errors={formik.touched.site && formik.errors.site} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.site} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="cnpj" label="CNPJ" icon="fas fa-file" title="CNPJ" name="cnpj" placeholder="Informe o CNPJ" errors={formik.touched.cnpj && formik.errors.cnpj} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cnpj} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="ie" label="IE" icon="fas fa-file-invoice" title="IE" name="ie" placeholder="Informe o IE" errors={formik.touched.ie && formik.errors.ie} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ie} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0 mb-3">
                  <TextField id="address" label="Endereço" icon="fas fa-address-book" title="Endereço" name="address" placeholder="Informe o endereço" errors={formik.touched.address && formik.errors.address} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="city" label="Cidade" icon="fas fa-city" title="Cidade" name="city" placeholder="Informe a cidade" errors={formik.touched.city && formik.errors.city} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="state" label="Estado" icon="fas fa-check-double" title="Estado" name="state" placeholder="Informe o estado" errors={formik.touched.state && formik.errors.state} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="neighborhood" label="Bairro" icon="fas fa-home" title="Bairro" name="neighborhood" placeholder="Informe o bairro" errors={formik.touched.neighborhood && formik.errors.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.neighborhood} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="zipCode" label="CEP" icon="fas fa-qrcode" title="CEP" name="zipCode" placeholder="Informe o CEP" errors={formik.touched.zipCode && formik.errors.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zipCode} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="number" label="Número" icon="fas fa-sort-numeric-up" title="Número" name="number" placeholder="Informe o número" errors={formik.touched.number && formik.errors.number} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="complement" label="Complemento" icon="fas fa-sort-amount-up" title="Complemento" name="complement" placeholder="Informe o complemento" errors={formik.touched.complement && formik.errors.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.complement} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status" dataList={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.obs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default System;
