import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  //   const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <ul>
        {data &&
          data.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
      </ul>
    </div>
  );
};

export default RepositoriesList;
