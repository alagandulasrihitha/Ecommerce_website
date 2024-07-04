import React, { useState } from "react";
import styled from "styled-components";
const MyImage = ({ imgs = [{ url: "" }] }) => {
const [mainImage,setMainImage]=useState(imgs[0]);

 return (
 <Wrapper>
   <div className="grid grid-four-column">
      {imgs.map((curElm,index) =>{
         return(
            <figure>
               <img src={curElm.url} alt={curElm.filename} 
               className="box-image--style"
               key={index}
               onClick={() => setMainImage(curElm)}
               />
            </figure>
         );
      })}
   </div>

   <div className="main-screen">
      <img src={mainImage.url} alt={mainImage.filename}/>
   </div>
 </Wrapper>
 );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100px;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;

    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;

    .grid {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default MyImage;