'use client';
import { PORTFOLIO_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";

function PortfolioPage() {
  let api = allExportedApi();
  const [data, setData] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let portfolioReversed = [...portfolio].reverse();

  const loadPortfolioData = async () => {
    let result = await api.portfolioApi();
    setData(result);
  };

  const loadAllPortfolilo = async () => {
    let result = await api.fetchAllportFolio();
    const totalServices = result.length;
    const totalPages = Math.ceil(totalServices / PORTFOLIO_PAGE_SIZE);
    setTotalPages(totalPages);
    const startIndex = (currentPage - 1) * PORTFOLIO_PAGE_SIZE;
    const endIndex = Math.min(startIndex + PORTFOLIO_PAGE_SIZE, totalServices);
    const displayedServices = result.slice(startIndex, endIndex);
    setPortfolio(displayedServices);
  };

  useEffect(() => {
    loadPortfolioData();
    loadAllPortfolilo();
  }, [currentPage]);

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
        
        
      </div>
    );
  };

  return (
    <>
      <div className="page_top">
        {data && data.map((ele) => (
          <div className="portfolio_page_wrapper" key={ele.id}>
            <div className="portfolio_page_top_section">
              <div className="portfolio_heading_image_wrapper">
                <div className="portfolio_page_top_heading">
                  <h1>{ele.acf.portfolio_page_heading}</h1>
                </div>
                <div className="portfolio_page_top_image">
                  <img src={ele.acf.portfolio_page_image || emptyImage.src} alt="portfolio_page_image" />
                  <div className="divider-yellow"></div>
                </div>
              </div>
            </div>
           
            <div className="portfolio_posts_wrapper">
            <div className="portfolio_page_description">
              <p dangerouslySetInnerHTML={{__html: ele.acf.portfolio_page_description}}></p>
            </div>
              <h1>Our Projects</h1>
              <div className="portfolio_showcase_wrapper">
                {portfolioReversed && portfolioReversed.map((e) => (
                  <Link href={`/portfolio/${e.slug}`} key={e.id}>
                    <div className="protfolio_items">
                      <div className="port_showcase_image">
                        <img className="showcase_hover_image" src={e.acf.portfolio_image || emptyImage.src} alt="" />
                        <div className="port_showcase_hove_effect">
                          <div className="showcase_wrapper">
                            <div className="port_showcase_left">
                              <div className="port_showcase_title">
                                <h2>{e.acf.portfolio_title}</h2>
                              </div>
                              <div className="port_showcase_short_description">
                                <h4>{e.acf.portfolio_technology}</h4>
                              </div>
                            </div>
                            <div className="port_showcase_right">
                              <div className="port_showcase_category">
                                {e.category.map((cat, index) => (
                                  <p key={index}>{cat}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="pagination-controls">
                {renderPaginationButtons()}
              </div>
            </div>
          </div>
        ))}
        <div className="unlock_success_btn">
          <Link href={`/`}>Unlock Success Now</Link>
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
