import React from "react";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};
