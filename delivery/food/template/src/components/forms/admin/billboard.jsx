/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  image: yup.string().required("Imagem é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
});

const FormBillboard = ({ id, initialData, loading, setLoading, toastMessage, action }) => {
  const params = useParams();
  const initialValues = initialData || { store: params.storeId, image: "", description: "" };
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
        // await axios.put(`/api/v1/${params.storeId}/products/${params.productId}`, values);
      } else {
        // await axios.post(`/api/v1/${params.storeId}/products`, data);
      }
      // navigate(0);
      // navigate(`/${params.storeId}/produtos`);
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
      <div className="flex items-center gap-8">
        {!formik.values.image
          ? (
            <label className="w-24 h-24 dark:bg-slate-900 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-md cursor-pointer text-sm font-semibold">
              <i className="fa fa-image h-4 w-4 mr-2"></i>Imagem
              <input type="file" onChange={(e) => formik.setFieldValue("image", e.target.files[0])} className="hidden" />
            </label>
          ) : (
            <div className="relative w-24 h-24 bg-gray-600 text-white flex items-center justify-center rounded-lg overflow-hidden">
              <i onClick={() => formik.setFieldValue("image", "")} className="absolute z-50 top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-md cursor-pointer"></i>
              <img src={window.URL.createObjectURL(formik.values.image)} className="object-cover"/>
            </div>
          )
        }
      </div>
      <div className="md:grid md:grid-cols-3 gap-8">
        <Input id="description" label="Descrição" title="Descrição" name="description" placeholder="Informe a descrição" errors={formik.touched.description && formik.errors.description} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} disabled={loading} />
      </div>
      <Button type="submit" className="dark:text-slate-700 bg-slate-900 text-white dark:bg-white">{action}</Button>
    </form>
  );
};

export default FormBillboard;
