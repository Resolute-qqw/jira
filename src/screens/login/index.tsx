import React, { FormEvent } from "react";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log(event);
}

export const LoginScreens = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input type="text" />
      </div>
      <div>
        <input type="submit" value="提交" />
      </div>
    </form>
  );
};
