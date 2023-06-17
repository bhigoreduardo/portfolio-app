import AreaField from "../../components/Inputs/AreaField";
import DateField from "../../components/Inputs/DateField";
import SelectField from "../../components/Inputs/SelectField";
import TextField from "../../components/Inputs/TextField";
import Layout from "../../components/Layout";
import FormTitle from "../../components/Navigation/FormTitle";

const Form = () => {
  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/usuarios" />
            
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="email" label="Email" icon="fas fa-envelope" title="Email" name="email" placeholder="Informe o email" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome" icon="fas fa-user" title="Nome" name="name" placeholder="Informe o nome" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="lastName" label="Sobrenome" icon="fas fa-user" title="Sobrenome" name="lastName" placeholder="Informe o sobrenome" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="phone" label="Telefone" icon="fas fa-phone" title="Telefone" name="phone" placeholder="Informe o telefone" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="mobile" label="Celular" icon="fas fa-mobile-alt" title="Celular" name="mobile" placeholder="Informe o celular" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="cpf" label="CPF" icon="fas fa-file" title="CPF" name="cpf" placeholder="Informe o CPF" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="rg" label="RG" icon="fas fa-file-invoice" title="RG" name="rg" placeholder="Informe o RG" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <DateField id="birthday" label="Nascimento" icon="fas fa-calendar-alt" title="Nascimento" name="birthday" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                <SelectField id="profile" label="Perfil" icon="fas fa-user-check" name="profile" placeholder="Sem perfil"  />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-lock"></i>&nbsp;Informação de segurança</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="password" label="Senha" icon="fas fa-link" title="Senha" name="password" placeholder="Informe a senha" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="repeatPassword" label="Repetir senha" icon="fas fa-shield-alt" title="Repetir senha" name="repeatPassword" placeholder="Repita a senha" />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0 mb-3">
                  <TextField id="address" label="Endereço" icon="fas fa-address-book" title="Endereço" name="address" placeholder="Informe o endereço" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="city" label="Cidade" icon="fas fa-city" title="Cidade" name="city" placeholder="Informe a cidade" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="state" label="Estado" icon="fas fa-check-double" title="Estado" name="state" placeholder="Informe o estado" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="neighborhood" label="Bairro" icon="fas fa-home" title="Bairro" name="neighborhood" placeholder="Informe o bairro" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="zipCode" label="CEP" icon="fas fa-qrcode" title="CEP" name="zipCode" placeholder="Informe o CEP" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="number" label="Número" icon="fas fa-sort-numeric-up" title="Número" name="number" placeholder="Informe o número" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="complement" label="Complemento" icon="fas fa-sort-amount-up" title="Complemento" name="complement" placeholder="Informe o complemento" />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status"  />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" />
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
