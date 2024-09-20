import React from 'react'
import { useState } from 'react'
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Food',
title: 'Chicken and Salmon Pate Food',
author: 'assets/images/course/author/01.jpg',
brand: 'Purina One',
price: '$1.99',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Food',
title: 'Turkey in Gravy',
author: 'assets/images/course/author/02.jpg',
brand: 'Purina Friskies',
price: '$1.49',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Food',
title: 'Mother & BabyCat Wet Food',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Royal Canin',
price: '$3.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Food',
title: 'Succulent Chicken',
author: 'assets/images/course/author/04.jpg',
brand: 'Tiki Cat',
price: '$1.99',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Food',
title: 'Rabbit Freezedried Feline Food',
author: 'assets/images/course/author/05.jpg',
brand: 'Primal',
price: '$23.99',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Food',
title: 'Raw Duck Entree Mini Patties',
author: 'assets/images/course/author/06.jpg',
brand: 'Vital Essential',
price: '$19.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Food',
title: 'Freeze Dried Meal Bites ',
author: 'assets/images/course/author/01.jpg',
brand: 'SmallBatch',
price: '$17.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Food',
title: 'Chicken Freeze Dried Raw',
author: 'assets/images/course/author/02.jpg',
brand: 'Stella&Chewys',
price: '$21.00',
id: 8,
},
]

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

// category baded filtering
const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
        return curElem.cate === categItem;
    });

    setItems(updateItems)

}
  return (
    <div className='course-section style-3 padding-tb'>
        {/* shapes */}
        <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
        <div className='course-shape two'><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>

        {/* main section */}
        <div className='container'>
            {/* section header */}
            <div className='section-header'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={() => setItems(ProductData)}>All</li>
                        <li onClick={() => filterItem("Shoes")}>Dry Food</li>
                        <li onClick={() => filterItem("Bags")}>Canned Food</li>
                        <li onClick={() => filterItem("Phones")}>Toy</li>
                        <li onClick={() => filterItem("Beauty")}>Litter</li>
                    </ul>
                </div>
            </div>

            {/* section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justtify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((product) => <div ket={product.id} className="col">
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                            <img src={product.imgUrl} alt="" />
                                            <div className='course-category'>
                                                <div className='course-cate'>
                                                    <a href="#">{product.cate}</a>
                                                </div>
                                                <div className='course-reiew'>
                                                    <Ratting/>
                                                </div>
                                            </div>
                                    </div>

                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-auto'>
                                                <Link to="/" className="ca-name">{product.brand}</Link>
                                            </div>
                                            <div className='course-price'>
                                                {product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase