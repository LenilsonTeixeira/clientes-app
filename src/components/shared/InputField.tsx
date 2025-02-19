import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    id: string;
    type: "email" | "password";
    placeholder: string;
  }
  
  const InputField = ({ label, id, type, placeholder, ...props }: InputFieldProps) => {
    return (
      <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          type={type}
          name={id}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  };

export default InputField