import { useState } from "react";

import Container from "./components/Container";
import MainForm from "./components/MainForm";
import DefaultInput from "./components/DefaultInput";
import DefaultButton from "./components/DefaultButton";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", senha);
  }

  return (
    <Container>
      <MainForm onSubmit={handleSubmit}>
        <DefaultInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <DefaultInput
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <DefaultButton text="Entrar" />
      </MainForm>
    </Container>
  );
}

export default App;