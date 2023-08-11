import React, { useState } from 'react'
import CommonSection from '../../components/UI/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../../assets/data/products';
import ProductList from '../../components/UI/ProductsList';
import './shop.css';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value
    if(filterValue === "Facewash"){
      const filteredProducts = products.filter(
        (item) => item.category === "Facewash"
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === "Serum"){
      const filteredProducts = products.filter(
        (item) => item.category === "Serum"
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === "Cream"){
      const filteredProducts = products.filter(
        (item) => item.category === "Cream"
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === "Facial Kit"){
      const filteredProducts = products.filter(
        (item) => item.category === "Facial Kit"
      );

      setProductsData(filteredProducts);
    }

  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchedProducts)
  };

  return (
    <Helmet title='shop'>
      <CommonSection title='Products'/>
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Fitler By Category</option>
                  <option value="Facewash">FaceWash</option>
                  <option value="Serum">Serum</option>
                  <option value="Cream">Cream</option>
                  <option value="Facial Kit">Facial Kit</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter__widget sort">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='Search' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 ? (
                <h1 className='text-center fs-4'>No Products are found!</h1> 
              ) : (
                <ProductList data={productsData} />
              )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
