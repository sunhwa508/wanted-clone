import React from 'react';
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SALES_MENU, MEDIA_MENU, ENGINEERING_MENU, HR_MENU, GAME_MENU, ETC_MENU } from '../assets/datas/MenuDatas'

const MenuContainer = styled.div<{ showMenu?: boolean }>`
    margin: 0 auto;
    max-width: 1060px;
    background-color: #fff;
    display:flex;
    flex-direction: row;
    transition: 0.4s;
    transform: translateY(-100%);
    transform: translateY(${(props) => props.showMenu && 0});
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

interface Props {
    showMenu: boolean,
    setShowMenu: any,
}
const GlobalSubMenu = ({ showMenu, setShowMenu }: Props) => {
    console.log(showMenu)
    return (
        <>
            <MenuContainer showMenu >
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
export default GlobalSubMenu