import { SetStateAction, useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
export default function Signup(props: { handleSignupOrLogin: () => void }){
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg: SetStateAction<string[]>) => {
    setMessage(msg);
  };

  return (
    <main>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  );
};


