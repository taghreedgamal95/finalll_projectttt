import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Store() {
  const [store, setStore] = useState([]);

  async function getStore() {
    try {
      const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products`);
      console.log(data); 
      setStore(data.slice(0, 20));
    } catch (error) {
      console.error("somthing went wrong while callin api...:", error);
    }
  }

  useEffect(() => {
    getStore();
  }, []);


return(
  <>
    <div className="container">
      <div className="row">
        {store.map((category) => <Item category={category}/> 
        )}
      </div>
    </div>
  
  </>
)

  function Item ({category}) {
     return (
    <>
          <div className="col-md-3" >
            <div className="item">
              <img src={category.images} alt="img" className='w-100' />
              <p>{category.title}</p>
              <button> {category.price} LE Buy </button>
            </div>
          </div>
    </>
  );

  }
 
}

