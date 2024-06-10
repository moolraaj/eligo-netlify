// import Link from "next/link"

 

// function NotFound() {
//   return (
//     <div className="not_found_outer">
//       <div className="not_found_inner">

//     <div className='not_found_wrapper'>
//       <h1>Ooops.</h1>
//       <p>I Think You Got Lost Between The Shapes.</p>
//       <p>The Page You Were Looking For Couldn't Be Found.</p>

//       <Link href={'/'}>go back to home page</Link>
        
//     </div>
//       </div>
//     </div>
//   )
// }

// export default NotFound





'use client'
import { useEffect, useState } from 'react';
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { emptyImage } from '../../public/assets/images';

function NotFound() {
  const [data, setData] = useState([]);
  const [searchPath, setSearchPath] = useState('');

  useEffect(() => {
    async function fetchData() {
      const api = allExportedApi();
      const result = await api.pageNotFound();
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    function getSearchPath() {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        setSearchPath(path);
      }
    }

    getSearchPath();
  }, []); 

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((ele, index) => {
        const acf = ele.acf || {};

        return (
          <div key={index} className="not_found_outer" style={{ backgroundColor: acf.background_color || 'white' }}>
            <div className="not_found_inner">
              <div className="not_found_wrapper">
                <div className="content">
                  <div className="text">
                  <h1 style={{ color: acf.tittle_color || 'black', fontSize: acf.tittle_size || '24px' }}>Ooops!.</h1>
                    <div
                      style={{ color: acf.description_color || 'grey', fontSize: acf.description_size || '16px' }}
                      dangerouslySetInnerHTML={{ __html: acf.description || 'Sorry, the page you’re looking for isn’t available.' }}
                    />
                    {searchPath && (
                      <p  style={{ fontSize: acf.description_size || '16px' }}>
                        Page not found: you searched for  " <span style={{ color: acf.searched_parameter_color || 'blue', fontSize: acf.searched_parameter_font_size || '16px' }}>{searchPath}</span> "
                      </p>
                    )}
                    {acf.links && acf.links.length > 0 && (
                      <ul>
                        {acf.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link href={link.link_url} target="_blank" rel="noopener noreferrer">
                              {link.link_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="image">
                    {acf.image && <img src={acf.image || emptyImage.src} alt="Not Found Image" style={{ maxWidth: acf.image_max_width ,width: acf.image_width || '250px', height: acf.image_height || '200px' }} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NotFound;
