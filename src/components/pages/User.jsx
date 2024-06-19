import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams(); //주소변수값을 가진 객체
  //처음 한번 유저를 검색
  useEffect(() => {
    getUser(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h3>
      {user.login}, {user.id}
    </h3>
  );
}

export default User;
