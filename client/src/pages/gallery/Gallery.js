import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Gallery() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
    getTotal();
    // eslint-disable-next-line
  }, []);

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
    // eslint-disable-next-line
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="section-three">
        <div className="container ">
          <div className="gallery ">
            {products?.map((p, i) => (
              // <Link to={`/product/${p._id}`}>
              <div key={i} className="single-img bg-info">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
                {/* <div className="single-img-content">
                    <h3>{p.name}</h3>
                  </div> */}
              </div>
              // </Link>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>
        {/* <div className="container bg-danger">
          <Galleryy />
        </div> */}
      </section>
    </>
  );
}
