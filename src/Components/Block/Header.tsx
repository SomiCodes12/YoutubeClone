import styled from "styled-components";
import {BsYoutube} from "react-icons/bs"
import {HiOutlineVideoCamera} from "react-icons/hi"
import {RxHamburgerMenu} from "react-icons/rx"
import {IoMdNotificationsOutline} from "react-icons/io"
import {FiSearch} from "react-icons/fi"
import {MdSettingsVoice} from "react-icons/md"
import {useContext} from "react"
import { GlobalContext } from "../../Global/GlobalProvider";

const Header = ()=>{
    const {show,SetShow} =  useContext(GlobalContext)

    const Toogle = ()=>{
        SetShow(!show)
    }
    return (
        <div>
            <Container>
                <Main>
                    <First>
                        <Menu onClick={Toogle}>
                            <RxHamburgerMenu/>
                        </Menu>
                       <Hold>
                       <Logo>
                            <BsYoutube/>
                            </Logo>
                            <Holder>
                            <Text>YouTube</Text>
                            <NG>NG</NG>
                            </Holder>
                       </Hold>
                    </First>
                    <Second>
                        <InputHolder>
                       <Input type="text"  placeholder="search your favourites here"/>
                       <SearhHold>
                        <FiSearch/>
                       </SearhHold>
                        </InputHolder>
                        <Icon>
                            <MdSettingsVoice/>
                        </Icon>
                    </Second>
                    <Third>
                        <Icon>
                            <HiOutlineVideoCamera/>
                        </Icon>
                        <Icon>
                            <IoMdNotificationsOutline/>
                        </Icon>
                        <Avatar>S</Avatar>
                    </Third>
                </Main>
            </Container>
        </div>
    )
}

export default Header;

const Holder = styled.div`
position: relative;
display: flex;
`

const NG = styled.div`
position: absolute;
top: -px;
left: 65px;
font-weight: 600;
font-size: 12px;
`

const SearhHold = styled.div`
width: 30px;
height: 40px;
margin-left: 25px;
flex: 1;
display: flex;
font-size: 25px;
justify-content: center;
align-items: center;
color: white;
background-color: yellow;
`

const Input = styled.input`
    width: 80%;
    height: 100%;
    padding-bottom: 12px;
    padding-left: 5px;
    outline: none;
border: 0;
`

const Hold = styled.div`
    display: flex;
`

const Menu = styled.div`
    margin-left: 5px;
    margin-top: 5px;
    font-size: 20px;
`

const Text = styled.div`
margin-top: 3px;
`
const Avatar = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
color: white;
margin-bottom: 2px;
`

const Third = styled.div`
display: flex ;
width: 130px;
display: flex;
justify-content: space-between;
align-items: center;
`

const InputHolder = styled.div`
width: 500px;
height: 40px;
border-radius: 30px;
border: 1px solid black;    
overflow: hidden;
display: flex;

`

const Second = styled.div`
width: 535px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.div`
margin-right: 5px;
font-size: 30px;
display: flex;
color: red;
`

const Icon = styled.div`
font-size: 20px;
`

const First = styled.div`
width: 155px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
z-index: 10;
position: fixed;
align-items: center;
background-color: white;

:hover{
    cursor: pointer;
}
`