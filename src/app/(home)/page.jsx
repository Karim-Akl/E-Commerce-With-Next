import { Suspense } from "react";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import "./home.css";
import Products from "./products.jsx";
import Loading from "./loading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <div className="True" style={{ display: "flex" ,textAlign:'center',marginBottom:'50px'}}>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ width: "1.5rem", marginLeft: "20px"}}
          />
          <h1 className="recommended">Recommended for you</h1>
        </div>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
