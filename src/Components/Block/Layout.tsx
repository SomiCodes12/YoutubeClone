import styled from "styled-components";
import Hero from "../../Pages/Hero";
import MainCard from "../../Pages/MainCard";
import Header from "./Header";
import Sider from "./Sider";

const Layout = ()=>{
    return (
        <div>
            <Header/>
          <Hold>
            <Hero/>
          </Hold>
            {/* <MainCard/> */}
        </div>
    )
}

export default Layout;

const Hold = styled.div`
display: flex;
overflow: hidden;
`