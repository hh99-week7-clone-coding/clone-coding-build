import React from 'react'
import styled from 'styled-components';
import "../App.css";
import { StLink } from "./Styles";
import { useNavigate } from 'react-router-dom';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ShopHeader = () => {

        const navigate = useNavigate();


        return (
        <StHeaderBox>
            <StMenuBox width="250px">
                <StLogo><StLink to={'/'}>TESLA</StLink></StLogo>
                <StSpan>|</StSpan>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop')
                    }}>Shop</StSpan>
                </StMenuBtn>
            </StMenuBox>
            <StMenuBox width="550px">
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/charging');
                    }}>Charging</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/model-s');
                    }}>Vehicle Accessories</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/men');
                    }}>Apparel</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/lifestyle');
                    }}>Lifestyle</StSpan>
                </StMenuBtn>
            </StMenuBox>
            <StMenuBox width="150px">
                <FontAwesomeIcon icon={faCartShopping} style={{color:"#FFFFFF"}}/>
                <StMenuBtn>
                    <StSpan>Menu</StSpan>
                </StMenuBtn>
            </StMenuBox>
        </StHeaderBox>
        )
        }

const StHeaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: transparent;
    z-index: 10;
`;

const StMenuBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    height: 50px;
`;

const StLogo = styled.h1`
    font-family: "Logo";
    font-size: 16px;
    color: white;
    letter-spacing: 10px;
`;

const StSpan = styled.span`
    font-family: "text";
    font-size: 15px;
    font-weight: bold;
    color: white
`;

const StMenuBtn = styled.div`
    &:hover{    
        cursor: pointer;
    }
`;

export default ShopHeader;