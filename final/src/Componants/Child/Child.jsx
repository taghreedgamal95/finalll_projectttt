import React from "react";

export default function Child({ product, delProd }) {

    if (!product) return null;

    let { id, category, desc, onSale } = product;
    return(
        <>

<div className="col-md-3">
  <div className="bg-warning item shadow-lg p-4 position-relative rounded d-flex flex-column" style={{ minHeight: '300px' }}>
    <h2 className="h5">Category: {category}</h2>
    <p className="flex-grow-1">Prod Desc: {desc}</p>
    
    {onSale && (
      <span className="badge bg-danger p-2 position-absolute top-0 end-0">
        OnSale
      </span>
    )}
    
    <div className="d-flex justify-content-between mt-auto">
      <button className="btn btn-danger" onClick={() => delProd(id)}>
        Delete
      </button>
    </div>
  </div>
</div>




           {/* <div className="col-md-3">
             <div className="bg-warning item shadow-log p-4 position-relative rounded">
                <h2>category: {category}</h2>
                <p>Prod Desc:{desc}</p>
                

                {onSale && (
                 <span className="badge bg-danger p-2 position-absute top-0 end-0">
                   OnSale
                 </span>
                )}
                <div className="d-flex justify-content-between my-2">
                 <button className="btn btn-danger" onClick={() => delProd(id)}>
                     Delete
                 </button>
                </div>
              </div>
            </div> */}
        </>
    )
    
}