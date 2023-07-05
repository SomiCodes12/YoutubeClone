import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { MdMusicNote } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GiTargetPrize } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";
import {useContext} from "react"
import { GlobalContext } from "../../Global/GlobalProvider";
const Sider = () => {
  const {show} =  useContext(GlobalContext)
  return (
    <div>
    {
      show?<div style={{width:"5%",height:"100vh",background:"red" , position : "absolute" , bottom : "0"}}>jehere</div>:  <Siderr>
      <SiderWrap>
        <Div
          style={{
            backgroundColor: "silver",
            borderRadius: "5px",
            paddingLeft: "5px          ",
          }}
        >
          <Icon>
            <AiFillHome />
          </Icon>
          <SiderText>Home</SiderText>
        </Div>
        <Div>
          <Icon>
            <BiMoviePlay />
          </Icon>
          <SiderText>Shorts</SiderText>
        </Div>
        <Div>
          <Icon>
            <MdSubscriptions />
          </Icon>
          <SiderText>Subscriptions</SiderText>
        </Div>
        <hr />
        <Div style={{ marginTop: "10px" }}>
          <Icon>
            <MdOutlineVideoLibrary />
          </Icon>
          <SiderText>Library</SiderText>
        </Div>
        <Div>
          <Icon>
            <FiClock />
          </Icon>
          <SiderText>History</SiderText>
        </Div>
        <Div>
          <Icon>
            <GoHistory />
          </Icon>
          <SiderText>Watch Later</SiderText>
        </Div>
        <Div>
          <Icon>
            <BiLike />
          </Icon>
          <SiderText>Liked Videos</SiderText>
        </Div>
        <hr />
        <Explore>Explore</Explore>
        <Div style={{ marginTop: "20px" }}>
          <Icon>
            <AiOutlineFire />
          </Icon>
          <SiderText>Trending</SiderText>
        </Div>
        <Div>
          <Icon>
            <MdMusicNote />
          </Icon>
          <SiderText>Music</SiderText>
        </Div>
        <Div>
          <Icon>
            <SiYoutubegaming />
          </Icon>
          <SiderText>Gaming</SiderText>
        </Div>
        <Div>
          <Icon>
            <SiYoutubegaming />
          </Icon>
          <SiderText>Gaming</SiderText>
        </Div>
        <Div>
          <Icon>
            <SiYoutubegaming />
          </Icon>
          <SiderText>Gaming</SiderText>
        </Div>
        <Div>
          <Icon>
            <SiYoutubegaming />
          </Icon>
          <SiderText>Gaming</SiderText>
        </Div>
        <Div>
          <Icon>
            <SiYoutubegaming />
          </Icon>
          <SiderText>Gaming</SiderText>
        </Div>
        <Div>
          <Icon>
            <HiOutlineNewspaper />
          </Icon>
          <SiderText>News</SiderText>
        </Div>
        <Div>
          <Icon>
            <GiTargetPrize />
          </Icon>
          <SiderText>Sport</SiderText>
        </Div>
        <hr />
      </SiderWrap>
    </Siderr>
    }
    </div>
  );
};

export default Sider;

const Explore = styled.div`
  /* margin-top: 20px; */
`;

const SiderText = styled.div`
  margin-left: 10px;
`;

const Icon = styled.div`
  font-size: 15px;
  margin-top: 2px;
`;

const Div = styled.div`
  width: 85%;
  height: 35px;
  display: flex;
  font-size: 14px;
  align-items: center;
  padding-left: 5px;
  margin-bottom: 5px;
  border-radius: 7px;

  :hover{
    cursor: pointer;
    background-color: lightgray;
  }
`;
const SiderWrap = styled.div`
  width: 100%;
  /* background-color: gold; */
  margin-top: 20px;
  height: 100%;
  margin-left: 15px;
  position: absolute;
`;

const Siderr = styled.div`
  width: 15%;
  height: 100vh;
  display: flex;
  position: absolute;
  margin-top: 65px;
  overflow: hidden;
  overflow-y: scroll;

  /* top: 0; */
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  position: fixed;
`;
