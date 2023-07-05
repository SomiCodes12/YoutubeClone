import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Routes/MainRoute";

const Home = ()=>{
  return (
      <div>
<RouterProvider router={MainRoute}/>
      </div>
  )
}

export default Home;