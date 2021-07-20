import styled from "styled-components"

export const Wrapper = styled.div`
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
    @media only screen and (max-width: 767px) {
        padding: 0 20px;
    }
    @media only screen and (max-width: 300px) {
        padding: 0 10px;
    }
`;

export const Container = styled.div`
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 50px;
    flex-wrap: wrap;

`;
export const Navigation = styled.nav`
    display:flex; 
    height:50px;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
        letter-spacing: 0px;
    }

`;

export const StyledUl = styled.ul`
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

    @media only screen and (max-width: 865px) {
    & li{
        & a{
            letter-spacing: -2px;
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

export const StyledIconUI = styled.ul`
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

export const ServiceButton = styled.li`
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

export const MenuContainer = styled.div`
    margin: 0 auto;
    height:500px;
    max-width: 1060px;
    background-color: white;
    display:flex;
    flex-direction: row;
    transition: 0.4s;
    transform: translateY(-100%);
    opacity: 0;
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

export const MenuTable = styled.div`
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
export const MobileMenu = styled.div`
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
export const MobileMenuHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;
export const MobileMenuContents = styled.ul`
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

export const GrayColored = styled.li`
    color: #999;
`;

export const LogoContainer = styled.div`
    & a{
        font-size: 20px;
        font-weight: bold;
    }
    @media only screen and (max-width: 767px) {
        display:none;
}
`;