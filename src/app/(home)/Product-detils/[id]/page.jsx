import React from "react";
import "./Product-detils.css";
import Footer from "/Users/karimakl/Documents/Front_End/E-Commerce-With-Next/src/components/footer/footer";
import Header from '/Users/karimakl/Documents/Front_End/E-Commerce-With-Next/src/components/header/header';


async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
const Page = async({ params }) => {
  const obgdata = await getData(params.id)
  return (
    
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header/>

      <main style={{ textAlign: "center",
        padding:'30px'

       }} className="flex">
        <img alt="" src={`${obgdata.image}`} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{obgdata.title} </h2>
          </div>
          <p className="description">
            {obgdata.description}
          </p>
          <button className="flex add-to-cart">
            <i className="fa-solid fa-cart-plus" />
            Add To Cart

          </button>
          <p className="price" >{obgdata.price} </p>

        </div>
      </main>
      <Footer/>
      
    </div>
  );
};

export default Page;





























