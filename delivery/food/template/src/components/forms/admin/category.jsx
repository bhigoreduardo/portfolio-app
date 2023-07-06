/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { status } from "@/types/common";
import Input from "@/components/ui/inputs/input";
import Select from "@/components/ui/inputs/select";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  status: yup.bool().required("Status é obrigatório"),
});

const FormCategory = ({ id, initialData, loading, setLoading, toastMessage, action }) => {
  const initialValues = initialData || { store: "", name: "", status: "" };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    console.log(values);
    try {
      setLoading(true);
      if (id) {
        // await axios.put(`/api/v1/${params.storeId}/categories/${params.categoryId}`, values);
      } else {
        // await axios.post(`/api/v1/${params.storeId}/categories`, data);
      }
      // navigate(0);
      // navigate(`/${params.storeId}/categorias`);
      toast.success(toastMessage);
    } catch (error) {
      console.log(error);
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-8 w-full" onSubmit={formik.handleSubmit}>
      <div className="md:grid md:grid-cols-3 gap-8">
        <Input id="name" label="Nome" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} disabled={loading} />
        <Select id="status" label="Status" title="Status" name="status" placeholder="Sem status" data={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
      </div>
      <Button type="submit" className="dark:text-slate-700 bg-slate-900 text-white dark:bg-white">{action}</Button>
    </form>
  );
};

export default FormCategory;
