import "./actionButton.scss";

interface IActionButton {
  label: string;
  onClick?: () => void;
  type?: "submit";
}

const ActionButton = ({ label, onClick, type }: IActionButton) => {
  return (
    <button type={type} className="action-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
