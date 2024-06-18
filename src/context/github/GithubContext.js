import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);
  //스테이트의 초기값
  const initialState = {
    users: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users", {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json(); //제이슨 변환
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    //setUsers(data); //유저들을 저장
    //setLoading(false); //데이터 로딩 완료
  };
  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
