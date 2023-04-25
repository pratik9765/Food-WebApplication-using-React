import React, {useState} from 'react';
import {data} from '../data/data';

const Food = () => {

    const [foods, setFoods] = useState(data);

    // filter by type
    const filterType = (category) =>{
        setFoods(
            data.filter((item) =>{
                return item.category === category
            })
        );
    };

    // filter by price
    const filterPrice = (price) =>{
        setFoods(
            data.filter((item)=> {
                return item.price === price;
            })
        );
    };


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>

        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between '>

            {/* filter-type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                    <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
                </div>
            </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
                    <button onClick={() => filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
                </div>

            </div>
        </div>

        {/* Display-foods  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item , index) => (
                    <div key={index} className='border shadow-xl rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] rounded-t-lg object-cover' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='text-white bg-orange-500 py-1 px-2 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>


                ))
            }
        </div>

    </div>
  )
}

export default Food;