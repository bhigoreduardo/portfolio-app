import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { condition } from "../../utils";
import AreaField from "../../components/Inputs/AreaField";
import DateField from "../../components/Inputs/DateField";
import SelectField from "../../components/Inputs/SelectField";
import TextField from "../../components/Inputs/TextField";
import Layout from "../../components/Layout";
import FormTitle from "../../components/Navigation/FormTitle";

const paymentSchema = yup.object().shape({
  supply: yup.number().required("Fornecedor é obrigatório"),
  deadlineAt: yup.date().required("Data de vencimento é obrigatório").typeError("Informe uma data válida"),
  amount: yup.number().required("Valor é obrigatório").typeError("Informe apenas número"),
  paymentMethod: yup.number().required("Forma de pagamento é obrigatório"),
  status: yup.bool().required("Condição é obrigatório"),
  obs: yup.string().optional(),
});

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [payment, setPayment] = useState("");
  const [supplies, setSupplies] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const getPayment = async () => {
    const { data } = await api.get(`/payments/findById?id=${id}`);
    setPayment(data);
  }
  const getSupplies = async () => {
    const { data } = await api.get("/supplies/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setSupplies(records);
  }
  const getPaymentMethods = async () => {
    const { data } = await api.get("/paymentMethods/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name + ": " + `${item.installments ? item.installments + "x " + (item.fees ? item.fees + "% juros" : "sem juros") : "à vista"}` }));
    setPaymentMethods(records);
  }
  useEffect(() => {
    if (id) getPayment();
    getSupplies();
    getPaymentMethods();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const paymentInitialValues = {
    supply: payment.supply || "",
    deadlineAt: payment.deadlineAt || "",
    amount: payment.amount || "",
    paymentMethod: payment.paymentMethod || "",
    status: payment.status || "",
    obs: payment.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: paymentInitialValues,
    validationSchema: paymentSchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('supply', values.supply);
    formData.append('deadlineAt', values.deadlineAt);
    formData.append('amount', values.amount);
    formData.append('paymentMethod', values.paymentMethod);
    formData.append('status', values.status);
    formData.append('obs', values.obs);

    if (id) {
      formData.append('id', id);
      api.post("payments/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }
    else {
      api.post("/payments/save", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }

    navigate("/contas-pagar");
  }

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/contas-pagar" />
            
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-info-circle"></i>&nbsp;Informações da conta</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="supply" label="Fornecedor" icon="fas fa-user" name="supply" placeholder="Sem fornecedor" dataList={supplies} errors={formik.touched.supply && formik.errors.supply} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.supply} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <DateField id="deadlineAt" label="Vencimento" icon="fas fa-calendar-alt" title="Vencimento" name="deadlineAt" errors={formik.touched.deadlineAt && formik.errors.deadlineAt} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.deadlineAt} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="amount" label="Valor" icon="fas fa-dollar-sign" title="Valor" name="amount" placeholder="Informe o valor" errors={formik.touched.amount && formik.errors.amount} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.amount} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="paymentMethod" label="Forma de pagamento" icon="fas fa-book" name="paymentMethod" placeholder="Sem forma de pagamento" dataList={paymentMethods} errors={formik.touched.paymentMethod && formik.errors.paymentMethod} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.paymentMethod} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Condição" icon="fas fa-globe" name="status" placeholder="Sem condição" dataList={condition} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
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
