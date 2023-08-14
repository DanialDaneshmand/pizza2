import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
