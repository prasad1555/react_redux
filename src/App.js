import "./App.css";
import Header from "./containers/Header";
import { ProductListing } from "./containers/ProductListing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./containers/PageNotFound";
import { ProductDetails } from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/prodcut/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="**" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
