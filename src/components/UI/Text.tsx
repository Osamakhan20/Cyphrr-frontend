import React from "react";

const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
