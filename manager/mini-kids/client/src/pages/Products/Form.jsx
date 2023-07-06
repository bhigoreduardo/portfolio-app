import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

// import { brands, categories, colors, sizes, variates } from "../../utils/data";
import api from "../../libs/api";
import { status } from "../../utils";
import Layout from "../../components/Layout";
import TextField from "../../components/Inputs/TextField";
import AreaField from "../../components/Inputs/AreaField";
import SelectField from "../../components/Inputs/SelectField";
import FormTitle from "../../components/Navigation/FormTitle";
import FormVariate from "./FormVariate";

const productSchema = yup.object().shape({
  sku: yup.string().optional(),
  barCode: yup.string().required("Código de barras é obrigatório"),
  ncm: yup.string().optional(),
  name: yup.string().required("Nome é obrigatório"),
  supply: yup.number().required("Fornecedor é obrigatório"),
  category: yup.number().required("Categoria é obrigatória"),
  brand: yup.number().required("Marca é obrigatória"),
  age: yup.number().required("Idade é obrigatória").typeError("Informe apenas números"),
  weight: yup.number().optional().typeError("Informe apenas números"),
  description: yup.string().required("Descrição é obrigatória"),
  cover: yup.string().optional(),
  status: yup.bool().required("Status é obrigatório"),
  obs: yup.string().optional(),
});

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [supplies, setSupplies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const getProduct = async () => {
    const { data } = await api.get(`/products/findById?id=${id}`);
    setProduct(data);
  }
  const getSupplies = async () => {
    const { data } = await api.get("/supplies/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setSupplies(records);
  }
  const getCategories = async () => {
    const { data } = await api.get("/categories/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setCategories(records);
  }
  const getBrands = async () => {
    const { data } = await api.get("/brands/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setBrands(records);
  }

  useEffect(() => {
    if (id) getProduct();
    getSupplies();
    getCategories();
    getBrands();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const productInitalValues = {
    sku: product.sku || "",
    barCode: product.barCode || "",
    ncm: product.ncm || "",
    name: product.name || "",
    supply: product.supply || "",
    category: product.category || "",
    brand: product.brand || "",
    age: product.age || "",
    weight: product.weight || "",
    description: product.description || "",
    cover: product.cover || "",
    status: product.status || "",
    obs: product.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: productInitalValues,
    validationSchema: productSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    if (id) {
      formData.append('id', id);
      api.post("/products/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        });
    }
    else {
      api.post("/products/save", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }

    navigate("/produtos");
  }

  // const [thumbnailFile, setThumbnailFile] = useState("");
  // const [mediasFile, setMediasFile] = useState([]);
  // const removeImage = id => setMediasFile(
  //   (prevState) => Array.from(prevState).filter((_, i) =>  i !== id)
  // );

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3 mb-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/produtos" />

            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-box"></i>&nbsp;Informações do produto</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="sku" label="Código/SKU" icon="fa fa-code" title="Código/SKU" name="sku" placeholder="Informe o código/SKU" errors={formik.touched.sku && formik.errors.sku} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sku} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="barCode" label="Código de barras" icon="fa fa-barcode" title="Código de barras" name="barCode" placeholder="Informe o código de barras" errors={formik.touched.barCode && formik.errors.barCode} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.barCode} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="ncm" label="NCM" icon="fa fa-file" title="NCM" name="ncm" placeholder="Informe o NCM" errors={formik.touched.ncm && formik.errors.ncm} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ncm} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome" icon="fas fa-archive" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="supply" label="Fornecedor" icon="far fa-address-card" name="supply" placeholder="Sem fornecedor" dataList={supplies} errors={formik.touched.supply && formik.errors.supply} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.supply} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="category" label="Categoria" icon="fas fa-transgender-alt" name="category" placeholder="Sem categoria" dataList={categories} errors={formik.touched.category && formik.errors.category} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="brand" label="Marca" icon="fas fa-asterisk" name="brand" placeholder="Sem marca" dataList={brands} errors={formik.touched.brand && formik.errors.brand} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.brand} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="age" label="Idade" icon="fas fa-baby" title="Nome" name="age" placeholder="Informe a idade" errors={formik.touched.age && formik.errors.age} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="weight" label="Peso (gramas)" icon="fas fa-weight" title="Peso" name="weight" placeholder="Informe o peso" errors={formik.touched.weight && formik.errors.weight} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weight} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="description" label="Descrição" icon="fas fa-align-center" title="Descrição" name="description" placeholder="Informe a descrição" errors={formik.touched.description && formik.errors.description} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-image"></i>&nbsp;Imagem do produto</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Capa</label>
                  <div className="flex items-center gap-2">
                    <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                      <i className="fa fa-image"></i>&nbsp;Capa
                      <input type="file" onChange={(e) => formik.setFieldValue("cover", e.target.files[0])} className="hidden" />
                    </label>
                    <div className="relative w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                      {!formik.values.cover ? "Sem capa" : (
                        <>
                          <i onClick={() => formik.setFieldValue("cover", "")} className="absolute top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-lg cursor-pointer"></i>
                          <img src={`${!id ? window.URL.createObjectURL(formik.values.cover) : import.meta.env.VITE_SERVER_URL+"/images/"+formik.values.cover}`} className="object-cover"/>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Galeria</label>
                  <div className="flex items-center flex-wrap gap-2">
                    <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                      <i className="fa fa-upload"></i>&nbsp;Galeria
                      <input type="file" multiple onChange={(e) => setMediasFile(e.target.files)} className="hidden" />
                    </label>
                    {!mediasFile?.length > 0 ? (
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        Sem Galeria
                      </div>
                    ) : (
                      Array.from(mediasFile).map((item, i) => (
                      <div key={i} className="relative w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <i onClick={() => removeImage(i)} className="absolute top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-lg cursor-pointer"></i>
                        <img src={window.URL.createObjectURL(item)} className="object-cover"/>
                      </div>
                      ))
                    )}
                  </div>
                </div> */}
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status" dataList={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" errors={formik.touched.obs && formik.errors.obs} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.obs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {id && <FormVariate productId={id} />}
      
    </Layout>
  );
};

export default Form;
