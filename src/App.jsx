import "./style/style.css";
import MyWeb from "./components/router/MyWeb";
import { ProductProvider } from "./provider/context/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <MyWeb />
      </ProductProvider>
    </>
  );
};

export default App;
