import "./rememberMeCheckbox.scss";

interface IRememberMeCheckbox {
  checked: boolean;
  onChange: () => void;
}

const RememberMeCheckbox = ({ checked, onChange }: IRememberMeCheckbox) => {
  return (
    <label
      className="container-input"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {" "}
      Remember me
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default RememberMeCheckbox;
