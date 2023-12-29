/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import products from "./data/productdata";

function App() {
  const [filteredProduct, setFilteredProduct] = useState(products);


  // fonction pour gérer les filtres au clic
  const handleFilter = (filtercriter) => {
    let newproducts;

    if (filtercriter === "all") {
      newproducts = products;
    } else if (filtercriter === "perprice") {
      newproducts = products.filter((product) => product.prix < 100);
    } else if (filtercriter === "perstock") {
      newproducts = products.filter((product) => product.stock > 20);
    }
    setFilteredProduct(newproducts);
  };

  return (
    <>
      <header>
        <a href="#" className="logo">
          Get<span className="bluecolor">Products</span>
        </a>
      </header>
      <main>
        <div className="filterbutton containers">
          <label htmlFor="selectfilter">Filtrer par:</label>
          <select
            id="selectfilter"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="all">Tous les produits</option>
            <option value="perprice">Prix inférieur à 100€</option>
            <option value="perstock">Stock supérieur à 20 unités</option>
          </select>
        </div>

        <div id="productlist" className="containers productlist">
          {filteredProduct.map((productitem) => (
            <div className="productlist__item" key={productitem.id}>
              <p className="productname">{productitem.nom}</p>
              <p>Catégorie:{productitem.categorie} </p>
              <p>Prix: {productitem.prix} €</p>
              <p>Stock: {productitem.stock} unités </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
