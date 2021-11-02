import { useState } from "react";
import { LoginScreens } from "./login";
import { RegisterScreens } from "./register";
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";
import icon from "assets/icon.svg";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <ShadowCard>
        {isRegister ? <RegisterScreens /> : <LoginScreens />}
        <Divider />
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export const LangButton = styled(Button)`
  width: 100%;
`;

const Header = styled.header`
  background: url(${icon}) no-repeat center;
  background-size: 2rem;
  padding: 5rem 0;
  width: 100%;
  display: flex;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
