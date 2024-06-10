'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { allExportedApi } from '@/utils/apis/Apis';
import ProductSlider from './productSlider';
import { emptyImage } from '../../../../../public/assets/images';

export default function ProductSlug({ slug }) {
    const api = allExportedApi();

   
    const [data, setData] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const loadSingleProduct = async () => {
        const response = await api.fetchSigleProducts(slug);
        setData(response);
    };

    const loadAllProducts = async () => {
        const response = await api.AllProducts();
        setAllProducts(response);
    };

    useEffect(() => {
        loadSingleProduct();
        loadAllProducts();
    }, []);

    

    return (
        <>
            <div className="our_product_inner_page">
                <div className="page_top">
                    {data && data.map((product, index) => {
                        const relatedProducts = allProducts.filter(relProduct => relProduct.slug !== product.slug);
                        return (
                            <div key={index} className="blog-header-section">
                                <div className="blog-header-image-heading">
                                    <div className="blog_img_heading_wrapper">
                                        <h2>{product.acf.product_name}</h2>
                                        <img src={product.acf.product_image.url || emptyImage.src} alt="blogPageImage" />
                                        <span></span>
                                    </div>
                                    <div className="blog_page_heading_wrapper">
                                        <div className="inner_portfolio_tittle_Section">
                                            <h1>{product.acf.product_name}</h1>
                                            <p dangerouslySetInnerHTML={{ __html: product.acf.product_inner_page_top_heading }}></p>
                                        </div>
                                        <div className="inner_portfolio_link_section">
                                            <Link href={product.acf.visit_product} target='_blank'>Visit</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_intro_join_section">
                                    <div className="products_inner_description">
                                        <p dangerouslySetInnerHTML={{ __html: product.acf.product_description }}></p>
                                    </div>
                                    <div className="related_product_wrapper">
                                        <h2>Related Products</h2>
                                        <div className="related_product_inner">
                                            {relatedProducts && relatedProducts.map((relProduct, index) => (
                                                <div key={index} className="related_product">
                                                    <Link href={`/our-products/${relProduct.slug}`}>{relProduct.acf.product_name}</Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <ProductSlider data={product.acf.product_slider}/>
                            </div>
                        );
                    })}
                </div>

                
            </div>
        </>
    );
}
