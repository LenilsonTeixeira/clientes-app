
interface FormContainerProps {
    children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
    return (
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {children}
          </div>
        </div>
      );
    };

export default FormContainer