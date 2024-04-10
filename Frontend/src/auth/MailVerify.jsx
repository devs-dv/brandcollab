import React, { useRef, useState } from "react";
import Text from "../customComponents/Text";

const MailVerify = () => {
  const inputRefs = useRef([]);
  const [verificationCode, setVerificationCode] = useState("");

  const handleInput = (index, e) => {
    const inputLength = e.target.value.length;
    const inputValue = e.target.value;

    const updatedCode = [...verificationCode];
    updatedCode[index] = inputValue;
    setVerificationCode(updatedCode.join(""));

    if (inputLength === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (inputLength === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (index === 3 && inputLength === 1) {
      console.log("Verification Code:", updatedCode.join(""));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col gap-3">
        <Text size="large">Verify Your Email Address</Text>
        <Text size="medium">A verification code is sent to ***.com</Text>
        <div className="flex gap-2">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              inputMode="numeric"
              className="p-2 text-center border rounded-md w-12"
              style={{ outline: "none" }}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInput(index, e)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MailVerify;
