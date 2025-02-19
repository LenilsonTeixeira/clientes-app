interface ButtonProps {
    type?: "button" | "submit" | "reset";
    text: string;                         
    onClick?: () => void;                 
    className?: string;                  
  }

  const Button = ({ type = "submit", text, onClick, className = "" }: ButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${className}`}
      >
        {text}
      </button>
    );
  };

export default Button