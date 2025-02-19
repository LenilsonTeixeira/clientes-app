import FormContainer from "../components/login/FormContainer";
import FormFooter from "../components/login/FormFooter";
import FormHeader from "../components/login/FormHeader";
import FormLogin from "../components/login/FormLogin";
import FormLogo from "../components/login/FormLogo";

const Login = () => {
    return (
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <FormLogo />
          <FormContainer>
            <FormHeader />
            <FormLogin />
            <FormFooter />
          </FormContainer>
        </div>
      </section>
    );
  };

export default Login