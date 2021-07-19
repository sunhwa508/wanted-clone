import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import Logo from './logo'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SALES_MENU, MEDIA_MENU, ENGINEERING_MENU, HR_MENU, GAME_MENU, ETC_MENU } from '../assets/datas/MenuDatas'

const Wrapper = styled.div`
    width:100%;
    height:50px;
    background-color: #fff;
    position: fixed;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    z-index:99999999;
`;
const Container = styled.div`
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 50px;
    @media (min-width: 1200px){
        width: 87.72%;
    }
`;
const Navigation = styled.nav`
    display:flex; 
    height:50px;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`;

const StyledUl = styled.ul`
    display:flex;
    flex-direction: row;
    text-align: center;
    margin: 0;
    list-style:none;
    & li{
        & a{
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
        &:hover{
                border-bottom:2px solid gray;
            }
        }
    }
`;

const StyledIconUI = styled.ul`
    display:flex;
    flex-direction: row;
    margin: 0;
    list-style: none;
    font-size:18px;
        & button{
        margin: 5px 0 0;
        padding: 0 10px;
        border: 0;
        background: none;
        }
`;

const ServiceButton = styled.li`
    position: relative;
    display: flex;
    height: 100%;
    vertical-align: middle;
    
    &:before{
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
    }
    & a{
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin: 0 0 0 10px;
    font-weight: 400;
    }
`;

const MenuContainer = styled.div`
    margin: 0 auto;
    height:100%;
    max-width: 1060px;
    background-color: white;
    display:flex;
    flex-direction: row;
    transition: 0.4s;
    transform: translateY(-100%);
    &:hover{
        transform: translateY(3%) 
    }
    &.active{
       transform: translateY(3%) 
    }

`;

const MenuTable = styled.div`
    flex-direction: column;
    width: 16.666%;
    height: 270px;
    padding: 40px 20px 0 0;
    text-align: left;
        & a{
        cursor:pointer;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding-right: 20px;
        padding-bottom: 15px;
        font-weight: 500;
        & h2{
            margin:0;
            font-size: 17px;
            color: #333;
            width: 100%;
            overflow: hidden;
        }
        & h3{
            margin:0;
            font-size: 13px;
            color: #999;
            padding-bottom: 0px;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;   
            }
    }
        
`;

const GlobalNavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMouseHover = (hoverState: boolean) => {
        setShowMenu(!hoverState)
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <Navigation>
                        <Logo />
                        <StyledUl>
                            <li onMouseEnter={() => handleMouseHover(false)} onMouseLeave={() => handleMouseHover(true)} onClick={() => setShowMenu(!showMenu)}><a>탐색</a></li>
                            <li><a>커리어 성장</a></li>
                            <li><a>직군별 연봉</a></li>
                            <li><a>이력서</a></li>
                            <li><a>매치업</a></li>
                            <li><a>프리랜서</a></li>
                            <li><a>Ai 합격예측</a></li>
                        </StyledUl>
                        <StyledIconUI>
                            <button><AiOutlineSearch size="20px" /></button>
                            <button><AiOutlineBell size="20px" /></button>
                            <button><CgProfile size="20px" /></button>
                            <ServiceButton><a>기업 서비스</a></ServiceButton>
                        </StyledIconUI>
                    </Navigation>
                </Container>
            </Wrapper >
            <MenuContainer className={showMenu ? 'active' : "none"} >
                <MenuTable>
                    <a><h2>영업</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {SALES_MENU.map((item: any) => {
                        return <a><h3>{item.name}</h3></a>
                    })}
                    <a><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </MenuTable>
                <MenuTable>
                    <a><h2>미디어</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {MEDIA_MENU.map((item: any) => {
                        return <a><h3>{item.name}</h3></a>
                    })}
                    <a><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </MenuTable>
                <MenuTable>
                    <a><h2>인사</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {HR_MENU.map((item: any) => {
                        return <a><h3>{item.name}</h3></a>
                    })}
                    <a><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </MenuTable>
                <MenuTable>
                    <a><h2>게임제작</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {GAME_MENU.map((item: any) => {
                        return <a><h3>{item.name}</h3></a>
                    })}
                    <a><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </MenuTable>
                <MenuTable>
                    <a><h2>엔지니어링·설계</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {ENGINEERING_MENU.map((item: any) => {
                        return <a><h3>{item.name}</h3></a>
                    })}
                    <a><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </MenuTable>
                <MenuTable>
                    {ETC_MENU.map((item: any) => {
                        return <a><h2>{item.name}</h2> <MdKeyboardArrowRight color="#999" /></a>
                    })}
                </MenuTable>
            </MenuContainer >
        </>


    )
}
export default GlobalNavigationBar