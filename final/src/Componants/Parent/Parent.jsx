import React, { useState } from 'react'
import Child from '../Child/Child';

export default function categories() {
    let prodArray = [
        {
            id: 1,
            category: "clothes",
            onSale: true,
            desc: "good",
        },
        {
            id:2,
            category:"electronics",
            onSale:true,
            desc: "good",
        },
        {
            id:3,
            category:"furnture",
            onSale:false,
            desc: "good",
        },
        {
            id:4,
            category:"accessories",
            onSale:false,
            desc: "good",
        },
       
    ];
    let [products, setProducts] = useState(prodArray);
    
    function deletProd(prodId) {
        let newProducts = products.filter((product)=> product.id !== prodId);
        setProducts(newProducts);
        console.log(deletProd);
        
    }
      
    return(
     <>
        <div>
            <h1>Categories</h1>
            <div className="container text-2xl bg-info p-4">
              <div className="row">
                 {products.map((product) => (
                        <Child product={product}delProd={deletProd} />
                  ))}
              </div>

            </div>
         </div>
    </>
   )
}