import { useState } from 'react';
import Logo from './logo'
import { AiOutlineBell, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SALES_MENU, MEDIA_MENU, ENGINEERING_MENU, HR_MENU, GAME_MENU, ETC_MENU } from '../assets/datas/MenuDatas'
import { Badge, IconButton } from '@material-ui/core';
import * as Styled from "./style"

const GlobalNavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleMouseHover = (hoverState: boolean) => {
        setShowMenu(!hoverState)
    }

    return (
        <>
            {/* 모바일 메뉴 */}
            <Styled.MobileMenu className={showMobileMenu ? "showMobileMenu" : "none"}>
                <Styled.MobileMenuHeader>
                    <div>LOGO</div>
                    <AiOutlineClose size="24px" color="#999" onClick={() => setShowMobileMenu(!showMobileMenu)} >X</AiOutlineClose>
                </Styled.MobileMenuHeader>
                <Styled.MobileMenuContents>
                    <Styled.MobileMenuHeader>
                        <li><a href='#!'>MY 원티드</a></li>
                        <CgProfile size="20px" />
                    </Styled.MobileMenuHeader>
                    <li><a href='#!'>프로필</a></li>
                    <li className="border"><a href='#!'>이력서</a></li>
                    <li><a href='#!'>매치업</a></li>
                    <li><a href='#!'>추천</a></li>
                    <li><a href='#!'>지원 현황</a></li>
                    <li><a href='#!'>프리랜서</a></li>
                    <li className="border"><a href='#!'>직군별 연봉</a></li>
                    <li><a href='#!'>커리어 성장</a></li>
                    <li className="border"><a href='#!'>기업 서비스</a></li>
                    <Styled.GrayColored><a href='#!'>로그아웃</a></Styled.GrayColored>
                </Styled.MobileMenuContents>
            </Styled.MobileMenu>

            {/* 상단 메인 메뉴 */}
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.Navigation>
                        <Logo />
                        <Styled.StyledUl>
                            <li className="mobile"><a href='#!'>홈</a></li>
                            <li className="mobile"><a href='#!'>탐색</a></li>
                            <li className="mobile"><a href='#!'>커리어 성장</a></li>
                            <li onMouseEnter={() => handleMouseHover(false)} onMouseLeave={() => handleMouseHover(true)}><a href='#!'>탐색</a></li>
                            <li><a href='#!'>커리어 성장</a></li>
                            <li><a href='#!'>직군별 연봉</a></li>
                            <li><a href='#!'>이력서</a></li>
                            <li><a href='#!'>매치업</a></li>
                            <li><a href='#!'>프리랜서</a></li>
                            <li><a href='#!'>Ai 합격예측</a></li>
                        </Styled.StyledUl>
                        <Styled.StyledIconUI>
                            <IconButton><Badge badgeContent={'N'} color="primary"><AiOutlineSearch size="20px" /></Badge></IconButton>
                            <IconButton><AiOutlineBell size="20px" /></IconButton>
                            <IconButton className="profile"><Badge badgeContent={'N'} color="primary"><CgProfile size="20px" /></Badge></IconButton>
                            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="mobile-menu"><AiOutlineMenu size="20px" /></button>
                            <Styled.ServiceButton><a href='#!'>기업 서비스</a></Styled.ServiceButton>
                        </Styled.StyledIconUI>
                    </Styled.Navigation>
                </Styled.Container>
            </Styled.Wrapper >

            {/* 메뉴 클릭시 아래로 내려오는 slide menu */}
            <Styled.MenuContainer className={showMenu ? 'active' : "none"} >
                <Styled.MenuTable>
                    <a href='#!'><h2>영업</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {SALES_MENU.map((item: any) => {
                        return <a href='#!'><h3>{item.name}</h3></a>
                    })}
                    <a href='#!'><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </Styled.MenuTable>
                <Styled.MenuTable>
                    <a href='#!'><h2>미디어</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {MEDIA_MENU.map((item: any) => {
                        return <a href='#!'><h3>{item.name}</h3></a>
                    })}
                    <a href='#!'><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </Styled.MenuTable>
                <Styled.MenuTable>
                    <a href='#!'><h2>인사</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {HR_MENU.map((item: any) => {
                        return <a href='#!'><h3>{item.name}</h3></a>
                    })}
                    <a href='#!'><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </Styled.MenuTable>
                <Styled.MenuTable>
                    <a href='#!'><h2>게임제작</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {GAME_MENU.map((item: any) => {
                        return <a href='#!'><h3>{item.name}</h3></a>
                    })}
                    <a href='#!'><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </Styled.MenuTable>
                <Styled.MenuTable>
                    <a href='#!'><h2>엔지니어링·설계</h2> <MdKeyboardArrowRight color="#999" /></a>
                    {ENGINEERING_MENU.map((item: any) => {
                        return <a href='#!'><h3>{item.name}</h3></a>
                    })}
                    <a href='#!'><h3>더보기</h3><MdKeyboardArrowRight color="#999" /></a>
                </Styled.MenuTable>
                <Styled.MenuTable>
                    {ETC_MENU.map((item: any) => {
                        return <a href='#!'><h2>{item.name}</h2> <MdKeyboardArrowRight color="#999" /></a>
                    })}
                </Styled.MenuTable>
            </Styled.MenuContainer >
        </>
    )
}
export default GlobalNavigationBar