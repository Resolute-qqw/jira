import React from "react";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import { useHttp } from "utils/http";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

  useEffect(() => {
    client("users").then(setUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};
