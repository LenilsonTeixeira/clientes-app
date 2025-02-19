import Checkbox from "../shared/Checkbox";
import FormForgotPasswordLink from "./FormForgotPasswordLink";
import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { useEffect, useState } from "react";

const FormLogin = () => {

  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    console.log("Email atualizado:", email);
    console.log("Senha atualizada", password)
  }, [email, password]);


    return (
      <form className="space-y-4 md:space-y-6" action="#">
        <InputField label="Email" id="email" type="email" placeholder="nome@empresa.com" onChange={handleEmail} value={email}/>
        <InputField label="Senha" id="password" type="password" placeholder="••••••••" onChange={handlePassword} value={password}/>
        
        <div className="flex items-center justify-between">
          <Checkbox id="remember" label="Lembrar-me" />
          <FormForgotPasswordLink/>
        </div>
        
        <Button text="Entrar" type="submit" className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-600`}/>
      </form>
    );
  };
  

export default FormLogin