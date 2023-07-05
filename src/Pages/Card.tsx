import styled from "styled-components"
import {getAllUsers} from "../Utils/APIs"
// import { title } from "process";
import db from "../Data/db.json"
import { useState } from "react"
import Botton from "../Components/ReUse/BottonProps"
const Card = ()=>{

  const [toggle , setToggle] = useState<boolean>(false)

  const [viewData, setViewData] = useState<{}[]>([])
  console.log(viewData);

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemPerPage, setItemPerPage] = useState<number>(5)

    let lastView = itemPerPage * currentPage
    let firstView = lastView - itemPerPage

    let myData = viewData.slice(firstView, lastView)
    console.log(myData);

    let pages: number[] = []

    for (let i = 1; i < Math.ceil(viewData.length / itemPerPage); i++) {
      pages.push(i)
  }

    return (
     
        <div>
           <Container>
           { 
                              db.data.map((props:any)=>(
                                <CardHold>
                               
                        <Image>
                        {
                                            props?.video.split(".")[3] === "mp4" ? <video
                                                src={props?.video}

                                                muted
                                                loop
                                                autoPlay
                                            /> : <img src={props?.image} />
                                        }
                        </Image>
                        <Hold>
                        <Avatar>
                          <img src={props?.avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="" />
                        </Avatar>
                        <Text>
                          <First > 
                            {props?.title}
                          </First>
                          <Second>{props?.subtitle}</Second>
                          <Third><b>Ad.</b> Ezerioha Somto</Third>
                          <FeedBack>
                        <Views>4.3m Views</Views>
                        <Time>18 hours ago</Time>
                     </FeedBack>
                        </Text>
                        </Hold>
                        {/* {
                              toggle ? (Content) : null
                              
                            } */}
                     </CardHold>
                              ))
                            }
                            
                            <Biv>
                    {
                        pages.map(props => (
                            <Button
                                bg={currentPage === props ? "l" : ""}

                                onClick={() => {
                                    setCurrentPage(props)
                                }}
                            >{props}</Button>
                        ))
                    }
                </Biv>

                     </Container>
                     </div> 
    )}
export default Card;

const Biv = styled.div`
display: flex;
margin-bottom: 30px;
`


const Button = styled.div<{ bg?: string }>`
padding: 8px 18px;
font-weight: 600;
background-color: ${({ bg }) => bg ? "darkorange" : "black"};
color: white;
border-radius:3px;
transition: all 350ms;
margin: 0 5px;
:hover{
    cursor:pointer;
    transform: translate(0, -5px)
}
`

const Hold = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
`

const Avatar = styled.div`
width: 30px;
height: 30px;
overflow: hidden;
border-radius: 50%;
border: 1px solid silver;
/* background-color: red; */
margin-top: 12px;
`

const Time = styled.div``

const Views = styled.div`
margin-right: 10px;
`

const FeedBack = styled.div`
display: flex;
margin-top: 5px;
`

const Third = styled.div``

const Second = styled.div`
margin-bottom: 4px;
`

const First = styled.div`
font-weight: bold;
margin-bottom: 4px;
`

const Text = styled.div`
margin-bottom: 25px;
margin-left: 5px;
margin-top: 10px;
font-size: 13px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const Image = styled.div`
width: 100%;
height: 170px;
background-color: grey;
align-items: flex-start;

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

const CardHold = styled.div`
border-radius: 10px;
margin-top: 20px;
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
/* margin-left: 10px; */
/* background-color: yellow; */
margin-right : 10px;
margin-left : 10px;
width: 285px;
position: relative;
min-height: 280px;

`

const Container = styled.div`
display: flex;
width: 950px;
flex-wrap: wrap;
/* background-color: purple; */
/* padding-right: 30px; */
min-height: 500px;
padding-bottom: 10px;
`