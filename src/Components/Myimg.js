import React, { useState, useEffect } from 'react';

export default function Myimg({ imgs = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(imgs[0]);

  useEffect(() => {
    // Update mainImage when imgs prop changes
    setMainImage(imgs[0]);
  }, [imgs]);

  return (
    <>
      <div className='row d-flex'>
        {imgs.map((curelm, index) => (
          <img
            key={index}
            src={curelm.url}
            alt={curelm.filename}
            className='w-25 mt-5 mb-3 img-fluid'
            onClick={() => setMainImage(curelm)}
          />
        ))}
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className='w-100 mt-5 mb-5 img-fluid'
        />
      </div>
    </>
  );
}
