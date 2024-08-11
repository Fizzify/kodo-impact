"use client";

import { Button, ButtonProps } from "nes-ui-react";

const GameButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default GameButton;
