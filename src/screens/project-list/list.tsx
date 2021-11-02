import React from "react";
import { User } from "./searchPanel";
import { Table } from "antd";
import dayjs from "dayjs";

interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ users, list }: ListProps) => (
  <Table
    pagination={false}
    columns={[
      {
        title: "部门",
        dataIndex: "organization",
      },
      {
        title: "名称",
        dataIndex: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "负责人",
        render: (item) => {
          return (
            <span>
              {users.find((user) => user.id === item.personId)?.name || "未知"}
            </span>
          );
        },
      },
      {
        title: "创建时间",
        render: (item) => {
          return (
            <span>
              {item.created ? dayjs(item.created).format("YYYY-MM-DD") : ""}
            </span>
          );
        },
      },
    ]}
    dataSource={list}
  ></Table>
);
