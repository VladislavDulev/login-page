import { ChangeEvent, FocusEvent } from "react";
import "./inputField.scss";
import { InputFieldEnum } from "../../utils/enums";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

interface IInputField {
  name: InputFieldEnum;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  error: string | undefined;
  type: InputFieldEnum;
}

const InputField = ({
  name,
  value,
  onChange,
  onBlur,
  error,
  type,
}: IInputField) => {
  return (
    <div className="form-input-field">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={capitalizeFirstLetter(name)}
        autoComplete="off"
      />
      {error && (
        <div
          style={{
            color: "red",
            marginTop: "15px",
            fontSize: 10,
            fontFamily: "Poppins",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
