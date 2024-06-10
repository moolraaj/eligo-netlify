'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function QuoteSection({ ele }) {  

  let router=useRouter()
  return (
    <>
      <div className="page_outer quote_section_outer scrolling">
        <div className="page_inner quote_section_inner">
          <div className="home_quote_wrapper">
            <div className="qoute_para">
              <p>{ele.acf.quote_para}</p>
            </div>
            <div className="quote_button">
              <button className="quote_redirection" onClick={()=>router.push('/contact')}>get a quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteSection