import React, { useEffect, useMemo, useState } from "react";
import "semantic-ui-css/semantic.min.css";

const LoginForm = () => {
  const [data, setData] = useState({
    //宣告一個狀態叫做data，初始值是一個物件
    username: "",
    password: "",
  }); //把username和password放在data裡面
  const { password, username } = data; //把data裡面的username和password拿出來

  // 正則表達式
  const usernameRegex = /^[a-zA-Z0-9]+$/; // username只能是英文和數字
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // 密碼必須包含大小寫英文字母和數字，且長度至少8位

  const handleSubmit = (e) => {
    e.preventDefault(); //阻止表單提交的預設行為 一定要放第一行 讓我先檢查有沒有通過驗證。如果通過检查才繼續提交表單 如果没有通過检查就阻止提交

    // 檢查username和password是否符合正則表達式
    if (!username.match(usernameRegex)) {
      alert("帳號只能是英文和數字");
      return;
    }
    if (!password.match(passwordRegex)) {
      alert("密碼需包含大小寫英文字母和數字，且長度至少8位");
      return;
    }
    // 如果通過就繼續往下執行
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            pattern={usernameRegex}
            title="帳號只能是英文和數字"
            placeholder="Username"
            onChange={(e) => {
              //   setUsername(e.target.value);
              setData({
                ...data,
                [e.target.name]: e.target.value, //1
              });
            }} //input的值有變化(有人輸入)時 觸發onChange去掉用箭頭函數，它會把input的值更新到username狀態中
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            pattern={passwordRegex}
            placeholder="密碼需包含大小寫英文字母和數字，且長度至少8位"
            onChange={(e) => {
              //   setPassword(e.target.value);
              setData({
                ...data,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default LoginForm;
