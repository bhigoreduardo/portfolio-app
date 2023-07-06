/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import FormPassword from "@/components/forms/admin/password";
import FormSettings from "@/components/forms/admin/settings";

const Settings = () => {
  const params = useParams();
  const [settings, setSettings] = useState("");
  const [loading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const title = 'Configurações';
  const description = 'Gerencie as informações da sua loja';
  const toastMessage = 'Configurações atualizada';
  const action = 'Atualizar configurações';

  const getSettings = async (id) => {
    console.log(id);
    setSettings("");
    // const { data } = await axios.get(`/api/v1/${params.storeId}/categories/${params.categoryId}`)
    // setCategory(data);
  }
  useEffect(() => {
    if (params.storeId) getSettings(params.storeId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
        <Button onClick={() => setChangePassword(!changePassword)} className="text-slate-700 bg-white">
          <i className={`fas ${changePassword ? "fa-cogs" : "fa-lock"} mr-2`}></i>{changePassword ? "Configurações" : "Alterar senha"}
        </Button>
      </div>
      {changePassword
        ? (<FormPassword loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />)
        : (<FormSettings initialData={settings} loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />)
      }
    </>
  );
};

export default Settings;
