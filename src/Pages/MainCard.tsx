import React, { useState } from 'react'
import styled from 'styled-components'
import {MdVisibility} from "react-icons/md"
import pic from "../Assets/IMG.gif"

// import SmoothButton from '../../components/Reuse/SmoothButton'

const data =[
    {topName: "Motivation",image : pic,icon :"L",view: 10, shortName : "Segun Michael", short: "I can make"},
    {topName: "Speech",image : pic,icon :"M",view: 1, shortName : "Ajayi Michael", short: "Atomic Habit"},
    {topName: "Comedy",image : pic,icon :"T",view: 2, shortName : "Travis Godwin", short: "Make it leave"},
    {topName: "technology",image : pic,icon :"W",view: 5, shortName : "Williams Taylor", short: "Turn the world with it"},
    {topName: "Romance",image : pic,icon :"N",view: 9, shortName : "Uche Austine", short: "Atomic Habit"},
    {topName: "Music",image : pic,icon :"N",view: 9, shortName : "Mikel Dock", short: "Rich has no idea about"},
    {topName: "Romance",image : pic,icon :"K",view: 19, shortName : "Mick joe", short: "Make it come"},
    {topName: "Speech",image : pic,icon :"Q",view: 20, shortName : "Napoleon Hill Michael", short: "don't auit"},
    {topName: "Comedy",image : pic,icon :"K",view: 37, shortName : "Kelvin hart", short: "Atomic Habit"},

]

const MainCard = () => {
    const [toggle,setToogle]= useState<boolean>(false)

    // const onToogled = ()=>{
    //     setToogle(!toggle)
    // }

  return (
    <div>
        <Container>
            <Main>
                <Holder>
                    {
                        data.map((props)=>(
                            <CardView>
                   
                            <Card>
                    
                                <TopSide>
                                <Image src={props.image}/>
                                <Display>
                                    <Text>{props.short}</Text>
                                </Display>
                                </TopSide>
                               
                                <Content
                                   onMouseEnter={()=>{
                                    setToogle(true)
                                }}
                                onMouseLeave={()=>{
                                    setToogle(false)
                                }} 
                                >
                                    <LeftSide>
                                        <ChatAt>{props.icon}</ChatAt>
                                        <Title>{props.shortName}</Title>
                                    </LeftSide>
                                    <RightSide>
                                        <Icon/>
                                        <Count>{props.view}</Count>
                                    </RightSide>
                                </Content>
                            </Card>
                            {
                                toggle? 
                                <View>
                                    <Hold>
                                        <div style={{display: "flex", alignItems: "center", margin: "20px", justifyContent: "space-between"}}>
                                        <ChatAt style={{color: "white"}}>L</ChatAt>
                                        <Name>{props.shortName}</Name>  
                                        <Button>{props.view} View</Button>          
                                        </div>
                                        
                                    </Hold>
                                    <Image2 src={pic}/>
                                    <Image2 src={pic}/>
                                    <Image2 src={pic}/>
                                
                            </View> :null
                            }
                            </CardView>
                        ))
                    }
               
                </Holder>
            
               
            </Main>
        </Container>
      
    </div>
  )
}

export default MainCard
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Image2 = styled.img`
width: 90px;
height: 100px;
object-fit: cover;
border-radius: 5px;
margin: 0 5px;

`
const Button = styled.button`
padding: 10px 25px;
border: none;
border-radius: 5px;
font-size: 15px;
`
const Name = styled.div``
const Hold = styled.div`

`
const Display = styled.div`
background: rgb(249,249,249);
background: linear-gradient(0deg, #050505 0%,  rgba(0,0,0,0) 100%);
width: 300px;
height: 200px;
position: absolute;
bottom: 0;
left: 0;
display: none;
align-items: flex-start;
transition: all 350ms;
`

const TopSide = styled.div`
position: relative;
width: 100%;
height: 330px;
transition: all 350ms;

:hover ${Display}{
    display: block;
    transition: all 350ms;
    align-items: flex-end;


}
`

const CardView = styled.div`
position: relative;
margin: 0 10px;

`
const View = styled.div`
width: 300px;
height: 200px;
background-color: silver;
position: absolute;
top: 0;
left: 0;
`
const Text = styled.div`
color: white;
margin-left: 20px;
margin-bottom: 20px;
`
const Count = styled.div``
const Icon = styled(MdVisibility)`
color: black;
margin-right: 5px;
color: blue;
`
const Title = styled.div``
const ChatAt = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: darkorange;
color: white;
margin-right: 5px;
`
const RightSide = styled.div`
display: flex;
align-items: center;
z-index: 2;
`
const LeftSide = styled.div`
display: flex;
align-items: center;
`
const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`
const Image = styled.img`
width: 100%;
height: 330px;
object-fit: cover;

`
const Card = styled.div`
width: 300px;
height: 400px;

border-radius: 5px 5px 0px 0px;
overflow: hidden;
`
const Main = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const Container = styled.div`
min-height: 500px;
padding-top: 20px;
/* margin-left : 90px; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`
