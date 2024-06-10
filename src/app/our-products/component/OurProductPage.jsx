'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PRODUCTS_PAGE_SIZE, allExportedApi } from '@/utils/apis/Apis';
import { useRouter } from 'next/navigation';
import { emptyImage } from '../../../../public/assets/images';

function OurProductPage() {
  let api = allExportedApi();
  const [ProductPageApiData, setProductPageApiData] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const loadProductPageData = async () => {
    let data = await api.ProductPageApi();
    setProductPageApiData(data);
  };

  const loadProducts = async () => {
    let data = await api.AllProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProductPageData();
    loadProducts();
  }, []);

  const totalPages = Math.ceil(products.length / PRODUCTS_PAGE_SIZE);

  const renderProducts = () => {
    const reversedProducts = [...products].reverse();
    const startIndex = (currentPage - 1) * PRODUCTS_PAGE_SIZE;
    const endIndex = startIndex + PRODUCTS_PAGE_SIZE;
    return reversedProducts.slice(startIndex, endIndex).map((product, index) => (
      <ul key={index} className={`product${index % 2 === 0 ? " even" : " odd"} our_product`}>
        <li>
          <span className="wrap_nmae_btn">
            <span><h1>{product.acf.product_name}</h1></span>
            <span><Link href={`/our-products/${product.slug}`}>Read More</Link></span>
          </span>
        </li>
        <li><img src={product.acf.product_image.url || emptyImage.src} alt="portfolio_image" /></li>
      </ul>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="pagination-buttons">
        {pageNumbers && pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="Our-product-page-outer page_top">
        <div className="Our-product-page-inner">
          {ProductPageApiData && ProductPageApiData.map((ele, index) => (
            <div key={index} className="product-page-top-section">
              <div className="product-top-image-section">
                <div className="product_heading_left"><h3>{ele.acf.product_page_heading}</h3></div>
                <div className="product_image_right">
                  <img src={ele.acf.product_page_image.url || emptyImage.src} alt="product_page_image" />
                  <span></span>
                </div>
              </div>
              <div className="product-top-info-section">
                <div className="product-page-left-info">
                  <h1>{ele.acf.product_page_heading}</h1>
                  <p>{ele.acf.product_page_description}</p>
                </div>
                <div className="product-page-right-info">
                  <div className="product_right_info_inner">
                    <p>{ele.acf.product_page__find_product_heading}</p>
                    <Link href={`/our-products`} >find our products</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="our_products_wrapper">
            {renderProducts()}
          </div>
          {totalPages > 1 && renderPaginationButtons()}
        </div>
      </div>
    </>
  );
}

export default OurProductPage;

