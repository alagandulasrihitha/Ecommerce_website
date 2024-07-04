import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";
const Products =() =>
{
  const {filter_products}=useFilterContext();
    return (
    <Wrapper>
    <div className="container grid grid-filter-column ">
       <div>
        <FilterSection/>
       </div>

       <section className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-product">
          <ProductList/>
        </div>
       </section>

      </div>    
    </Wrapper>
    );
};

const Wrapper = styled.section`
  .grid-filter-column {
     grid-template-columns: 0.2fr 1fr;
  } 

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

// grid filter column sets up a grid with 2 columns
// first column takes 0.2 fraction of available space and second column takes remaining 1 farction space
// @media has grid template column that takes full widtg when the view port is narrow(mobile devices)
export default Products;