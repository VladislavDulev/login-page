import React from "react";
import ActionButton from "./common/ActionButton";

interface IGreetAndLogout {
  email: string;
  onLogout: () => void;
}

const GreetAndLogout = ({ email, onLogout }: IGreetAndLogout) => {
  const greetingUser = `Hi, ${email}`;

  return (
    <div>
      <p style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 22 }}>
        {greetingUser}
      </p>
      <ActionButton label="Logout" onClick={onLogout} />
    </div>
  );
};

export default GreetAndLogout;
