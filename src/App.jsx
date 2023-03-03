import { BrowserRouter, Routes, Route} from "react-router-dom"

import {ListProducts} from "./pages/listProducts/index"
import { ProductsId } from "./pages/productsId/index";

import styles from  './App.module.css';


function App() {
  return (
    <>
    <div className={styles.header}>
      <h1>DEV-<strong style={{color:"#000"}}>STORE</strong></h1>
    </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<ListProducts/>}/>
            <Route path="/productsId/:id" element={<ProductsId/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
