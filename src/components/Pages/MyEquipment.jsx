import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import UpdateCard from '../Card/UpdateCard';

const MyEquipment = () => {
    const data = useLoaderData()
    const [items,setItems] = useState(data)
    // console.log(items)
//   const  {name,email,itemName,quantity,category,photo,process,customization,price,rating,description } = items
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-gray-200 mt-10 mb-10">
        {
          items?.map(item=><UpdateCard key={item._id} item={item} items={items} setItems={setItems}></UpdateCard>)
        }
        </div>
    );
};

export default MyEquipment;