'use client'
import React, { useEffect, useState } from 'react'

function RerenderCompo() {
  const spanContents = [
    "something cool",
    "YOUR NEXT PROJECT",
    "SOLVING CHALLENGES"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % spanContents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      {spanContents && spanContents.map((content, index) => (
        <span key={index} className={currentIndex === index ? "show" : "hide"}>
          {content}
        </span>
      ))}
    </>
  )
}

export default RerenderCompo
