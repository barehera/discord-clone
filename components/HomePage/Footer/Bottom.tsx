import React from "react";
import Logo from "../UI/Logo";
import Button from "./Button";

const Bottom = () => {
  return (
    <div className="flex items-center justify-between border-t pt-7 border-secondary">
      <Logo color="text-white" />
      <Button />
    </div>
  );
};

export default Bottom;
