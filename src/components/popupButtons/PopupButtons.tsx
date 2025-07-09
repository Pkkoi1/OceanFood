import React from "react";
import BellButton from "./bellButton/BellButton";
import ContactButton from "./contactButton/ContactButton";

const PopupButtons: React.FC = () => {
  return (
    <>
      <BellButton />
      <ContactButton />
    </>
  );
};

export default PopupButtons;
