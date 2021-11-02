import React from "react";
import { ProjectList } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as Logo } from "assets/icon.svg";
import { Dropdown, Menu, Button } from "antd";

export const Authenticated = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <PageHeader justify={"space-between"}>
        <HeaderLeft gap={true}>
          <Logo width={"5rem"} height={"5rem"} />
          <h2>项目</h2>
          <h2>用户</h2>
          <h2>another</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="logout">
                  <Button type="link" onClick={() => logout()}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="link" onClick={() => logout()}>
              Hi, {user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </PageHeader>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const PageHeader = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Main = styled.div``;
