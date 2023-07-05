import styled from "styled-components";
import {useContext} from "react"
import { GlobalContext } from "../Global/GlobalProvider";
import Sider from "../Components/Block/Sider";
import Body from "./Body";

const Hero = ()=>{
   const {show} =  useContext(GlobalContext)
    return (
      
        <div>
           <Container>
           <Sider/>
                 <Body/>
            </Container>
         </div> 
    )
}

export default Hero;


const Container = styled.div`     
width: 100%;
min-height: 585px ;
/* background-color: red; */
display: flex;
justify-content: space-between;
/* position: absolute; */
/* display: flex; */
/* justify-content: space-between; */
overflow: hidden;
position: relative;



// `