import "./App.css";
import DataTable from "./components/table";
import { useSelector, useDispatch } from "react-redux";
import { dataGridActions } from "./store/rowDataSlice";
import Form from "./components/form";
function App() {
  const formIsOpen = useSelector((state) => state.formIsOpen);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {formIsOpen ? (
        <div
          className="overlay"
          onClick={() => {
            dispatch(dataGridActions.toggleFormView());
          }}
        />
      ) : null}
      <Form />
      <DataTable />
    </div>
  );
}

export default App;
