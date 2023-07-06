import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import FormProfile from "@/components/forms/web/profile";
import FormPassword from "@/components/forms/web/password";

const Profile = () => {
  const params = useParams();
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const title = changePassword ? 'Trocar senha' : 'Perfil';
  const description = 'Gerencie as informações da sua conta';
  const toastMessage = changePassword ? 'Senha atualizada' : 'Informações atualizada';
  const action = changePassword ? 'Atualizar senha' : 'Atualizar conta';

  const getProfile = async (id) => {
    console.log(id);
    setProfile("");
    // const { data } = await axios.get(`/api/v1/${params.storeId}/categories/${params.categoryId}`)
    // setCategory(data);
  }
  useEffect(() => {
    if (params.storeId) getProfile(params.storeId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4 gap-2">
        <Heading title={title} description={description} />
        <Button className="bg-red-500 text-white">Sair</Button>
      </div>
      {changePassword
        ? (<FormPassword loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />)
        : (<FormProfile initialData={profile} loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />)
      }
      <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center mt-8 pt-0 px-1 sm:px-6">
        <p className="mx-auto mb-6 leading-normal text-sm">
          {changePassword ? "Atualizar conta?" : "Atualizar senha?"}
          <button type="button" onClick={() => setChangePassword(!changePassword)} className="ml-2 font-semibold text-[#8e2de2] dark:text-gray-200">
            {changePassword ? "Acessar conta" : "Trocar senha"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
