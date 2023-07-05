import styled from "styled-components";
import Card from "./Card";
const Array = [
    "Live",
    "Music",
    "Nollywood",
    "News",
    "Gaming",
    "Playlist",
    "Contemporary worship musics",
    "Sport League",
    "Cars",
   //  "Recent"
]

const Body = ()=>{
    return (
        <div>
               <Container>
                     <Top>
                     <All>All</All>
                  <Hold>
                  {
                        Array.map((props : string , i : number)=>(
                            
                            <Map key={i}>{props}</Map>
                        ))
                     }
                  </Hold>
                     </Top>
                 <CardHold>
                    <Card/>
                 </CardHold>
           
                    </Container>
        </div>
    )
}

export default Body;


const CardHold = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`

const Hold = styled.div`
    display: flex;
`

const Top = styled.div`
width: 100%;
display: flex;
margin-top: 30px;
font-size: 14px;
margin-left: 10px;
height: 40px;
overflow: hidden;
`

const Map = styled.div`
padding : 9px 10px;
margin: 0 6px;
background-color: lightgray;
border-radius: 20px;

:hover{
   cursor: pointer;
}
`

const All = styled.div`
padding: 7px 15px;
background-color: black;
border-radius: 3px;
color: white;
border-radius: 3px;

`

const Container = styled.div`
/* width: 100%; */
min-height: 500px;
background-color: rgb(173, 216, 230);
display:flex ;
margin-left: 15%;
margin-top: 50px;
flex-wrap: wrap;
/* overflow: hidden; */
`
