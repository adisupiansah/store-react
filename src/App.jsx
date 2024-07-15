import "./style/style.css";
import MyWeb from "./components/router/MyWeb";
import { ProductProvider } from "./provider/context/ProductProvider";
import { CategorieProvider } from "./provider/context/ProductProvider";

const App = () => {
  return (
    <>
      <CategorieProvider>
        <ProductProvider>
          <MyWeb />
        </ProductProvider>
      </CategorieProvider>
    </>
  );
};

export default App;
