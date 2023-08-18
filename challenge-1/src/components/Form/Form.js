import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputMail, setInputMail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: inputName,
      age: inputAge,
      mail: inputMail,
    };
    props.onUserData(userData);
    setInputName("");
    setInputAge("");
    setInputMail("");
  };

  const nameAddHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageAddHandler = (event) => {
    setInputAge(event.target.value);
  };

  const mailAddHandler = (event) => {
    setInputMail(event.trget.value);
  };

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <div className="user-info">
        <div className="user-info__control">
          <lable>Имя</lable>
          <input
            type="text"
            placeholder="Ваше имя"
            value={inputName}
            onChange={nameAddHandler}
          />
        </div>

        <div className="user-info__control">
          <lable>Возраст</lable>
          <input
            type="text"
            placeholder="Ваш возраст"
            value={inputAge}
            onChange={ageAddHandler}
          />

          <div className="user-info__control">
            <lable>Почта</lable>
            <input
              type="mail"
              placeholder="Ваша почта"
              value={inputMail}
              onChange={mailAddHandler}
            />
          </div>
          <button type="submit">Добавить пользователя</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
