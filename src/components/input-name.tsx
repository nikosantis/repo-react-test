import { FC, useState } from "react";
import styled from "styled-components";

const InputName: FC = () => {
  const [title, setTitle] = useState("");
  return (
    <div
      style={{
        background: "blue",
      }}
    >
      <Text>
        Texto Input: <Bold>{title}</Bold>
      </Text>
      <input
        type="text"
        placeholder="Pon aquí un texto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

const Text = styled.p`
  color: red;
  font-size: 50px;
  text-decoration: underline;
`;

const Bold = styled.b`
  color: green;
`;

export default InputName;
