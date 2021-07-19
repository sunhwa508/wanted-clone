import { useState } from 'react';
import styled from 'styled-components'
import Logo from './logo'
import { AiOutlineBell, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SALES_MENU, MEDIA_MENU, ENGINEERING_MENU, HR_MENU, GAME_MENU, ETC_MENU } from '../assets/datas/MenuDatas'
import { Badge, IconButton } from '@material-ui/core';

const Wrapper = styled.div`
    width:100%;
    height:50px;
    background-color: #fff;
    position: fixed;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    z-index:1;
    padding: 0 50px;
    @media only screen and (max-width: 1200px) {
        padding: 0 40px;
    }
    @media only screen and (max-width: 1200px) {
        padding: 0 10px;
    }

`;
const Container = styled.div`
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 50px;
    flex-wrap: wrap;

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
    padding:0;
    list-style:none;
    justify-content: space-evenly;
    & li{
        &.mobile{
        display:none;
        }
        white-space: nowrap;
        & a{
        position: relative;
        font-size: 14px;
        line-height: 50px;
        font-weight: 500;
        padding: 15px;
        &:hover{
            border-bottom:2px solid #258bf7;
            }
        }
    }

@media only screen and (max-width: 767px) {
    & li{
        &:not(.mobile){
            display:none;
        }
        &.mobile{
            display:inline-block;
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
        padding: 0 10px;
        border: 0;
        background: none;
            &.mobile-menu{
            display:none
            }
        }
    @media only screen and (max-width: 850px) {
        padding:0;
    & button{
    margin: 5px 0 0;
    }
}
    @media only screen and (max-width: 767px) { 
        & button{
        &.profile{
        display:none
        }
        &.mobile-menu{
        display:flex
        }
    }
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
        font-weight: 500;
        white-space: nowrap;
        }

        @media only screen and (max-width: 767px) {
            display:none;
            pointer-events: none;
        }
`;

const MenuContainer = styled.div`
    margin: 0 auto;
    height:500px;
    max-width: 1060px;
    background-color: white;
    display:flex;
    flex-direction: row;
    transition: 0.4s;
    transform: translateY(5%);
    opacity: 100;
    padding:20px;
    &:hover{
        transform: translateY(5%);
        opacity: 100;
    }
    &.active{
       transform: translateY(5%);
       opacity: 100;
    }

`;

const MenuTable = styled.div`
    flex-direction: column;
    width: 16.666%;
    height: 270px;
    padding: 40px 20px 0 0;
    text-align: left;
    display:flex;
    text-overflow: ellipsis;
    white-space: nowrap;
    
        & a{
        cursor:pointer;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding-right: 20px;
        padding-bottom: 15px;
        font-weight: 500;
        max-width: 150px;
        & h2{
            margin:0;
            font-size: 17px;
            color: #333;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
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
    @media only screen and (max-width: 767px) {
            display:none;
        }
`;

const MobileMenu = styled.div`
    width:100vw;
    height:100vh;
    background-color: white;
    z-index:1;
    display:none;
    padding:20px;
    box-shadow: none;
    border: 1px solid #e1e2e3;
    border-radius: 0;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
            &.showMobileMenu{
                display:inline-block;
            }
        }
`
const MobileMenuHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;
const MobileMenuContents = styled.ul`
    margin: 45px 0 15px;
    padding:0;
    list-style: none;
    & li{
    height:50px;
    cursor: pointer;
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    display:list-item;
    & a{
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    }
        &.border{
           padding-top: 15px;
           border-top: 1px solid #eee;
           margin-top: 15px;
           & a{
               margin-top:30px;
               padding-top: 30px;
           }
        }
    }
`;

const GrayColored = styled.li`
color: #999;
`;

const GlobalNavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleMouseHover = (hoverState: boolean) => {
        setShowMenu(!hoverState)
    }

    return (
        <>
            {/* 모바일 메뉴 */}
            <MobileMenu className={showMobileMenu ? "showMobileMenu" : "none"}>
                <MobileMenuHeader>
                    <div>LOGO</div>
                    <AiOutlineClose size="24px" color="#999" onClick={() => setShowMobileMenu(!showMobileMenu)} >X</AiOutlineClose>
                </MobileMenuHeader>
                <MobileMenuContents>
                    <MobileMenuHeader>
                        <li><a>MY 원티드</a></li>
                        <CgProfile size="20px" />
                    </MobileMenuHeader>
                    <li><a>프로필</a></li>
                    <li className="border"><a>이력서</a></li>
                    <li><a>매치업</a></li>
                    <li><a>추천</a></li>
                    <li><a>지원 현황</a></li>
                    <li><a>프리랜서</a></li>
                    <li className="border"><a>직군별 연봉</a></li>
                    <li><a>커리어 성장</a></li>
                    <li className="border"><a>기업 서비스</a></li>
                    <GrayColored><a>로그아웃</a></GrayColored>
                </MobileMenuContents>
            </MobileMenu>
            {/* 상단 메인 메뉴 */}
            <Wrapper>
                <Container>
                    <Navigation>
                        <Logo />
                        <StyledUl>
                            <li className="mobile"><a>홈</a></li>
                            <li className="mobile"><a>탐색</a></li>
                            <li className="mobile"><a>커리어 성장</a></li>
                            <li onMouseEnter={() => handleMouseHover(false)} onMouseLeave={() => handleMouseHover(true)}><a>탐색</a></li>
                            <li><a>커리어 성장</a></li>
                            <li><a>직군별 연봉</a></li>
                            <li><a>이력서</a></li>
                            <li><a>매치업</a></li>
                            <li><a>프리랜서</a></li>
                            <li><a>Ai 합격예측</a></li>
                        </StyledUl>
                        <StyledIconUI>
                            <IconButton><Badge badgeContent={'N'} color="primary"><AiOutlineSearch size="20px" /></Badge></IconButton>
                            <IconButton><AiOutlineBell size="20px" /></IconButton>
                            <IconButton className="profile"><Badge badgeContent={'N'} color="primary"><CgProfile size="20px" /></Badge></IconButton>
                            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="mobile-menu"><AiOutlineMenu size="20px" /></button>
                            <ServiceButton><a>기업 서비스</a></ServiceButton>
                        </StyledIconUI>
                    </Navigation>
                </Container>
            </Wrapper >
            {/* 메뉴 클릭시 아래로 내려오는 slide menu */}
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