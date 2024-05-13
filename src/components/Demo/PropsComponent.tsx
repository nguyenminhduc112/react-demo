import React from "react";
const DemoComponent = (props: TypeProps) => {
  return (
    <h1 style={{ color: "red", textAlign: "center" }}>Wellcome {props.name}</h1>
  );
};

export default DemoComponent;
