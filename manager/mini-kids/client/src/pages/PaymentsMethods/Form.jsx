import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const paymentMethodSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  installments: yup.number().optional().typeError("Informe apenas número"),
  fees: yup.number().optional().typeError("Informe apenas número"),
  status: yup.bool().required("Status é obrigatório"),
  obs: yup.string().optional(),
});

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("");

  const getPaymentMethod = async () => {
    const { data } = await api.get(`/paymentMethods/findById?id=${id}`);
    setPaymentMethod(data);
  }
  useEffect(() => {
    if (id) getPaymentMethod();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const paymentMethodInitialValues = {
    name: paymentMethod.name || "",
    installments: paymentMethod.installments || "",
    fees: paymentMethod.fees || "",
    status: paymentMethod.status || "",
    obs: paymentMethod.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: paymentMethodInitialValues,
    validationSchema: paymentMethodSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('installments', values.installments);
    formData.append('fees', values.fees);
    formData.append('status', values.status);
    formData.append('obs', values.obs);

    if (id) {
      formData.append('id', id);
      api.post("paymentMethods/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }
    else {
      api.post("/paymentMethods/save", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }

    navigate("/formas-pagamento");
  }

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/formas-pagamento" />
            
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-info-circle"></i>&nbsp;Informações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome" icon="fas fa-archive" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="installments" label="Parcelas" icon="fas fa-credit-card" title="Parcelas" name="installments" placeholder="Informe as parcelas" errors={formik.touched.installments && formik.errors.installments} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.installments} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="fees" label="Juros" icon="fas fa-percent" title="Juros" name="fees" placeholder="Informe o juros" errors={formik.touched.fees && formik.errors.fees} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fees} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status" dataList={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" onChange={formik.handleChange} value={formik.values.obs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Form;
