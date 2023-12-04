import {useEffect} from "react";
import {FormInputProps} from "./form-input.interface";

const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMessage,

  iconClassNameAndStyle,
  ...otherProps
}) => {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {iconClassNameAndStyle && (
            <i className={`${iconClassNameAndStyle} `} />
          )}
          {label}
        </label>
        <div>
          <input
            {...otherProps}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          {errorMessage && (
            <div className="text-red-500 text-sm pt-2 font-bold">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FormInput;
