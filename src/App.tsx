import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Router/MainRouter";


export const App = () => {
  
  return (
    <BrowserRouter basename="/">
      <MainRouter />
    </BrowserRouter>
  )
}

