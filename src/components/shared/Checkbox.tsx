interface CheckboxProps {
    id: string;
    label: string;
  }
  
  const Checkbox = ({ id, label }: CheckboxProps) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            aria-describedby={id}
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="text-gray-500">
            {label}
          </label>
        </div>
      </div>
    );
  };

export default Checkbox