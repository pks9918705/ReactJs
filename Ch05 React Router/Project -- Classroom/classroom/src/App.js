import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {
  createBrowserRouter,
   
  RouterProvider,
} from "react-router-dom"

function App() {

  //Router implementation
  const router=createBrowserRouter([
    {path:"/",
    element:<Nav/>,
    children:[
      {index:true, element:<Hero/>},
      {path:"/courses",element:<Courses/>}
    ]
    }
    
  ])


  return (
    <div className="App">
       
       <RouterProvider router={router} />

    </div>
  );
}

export default App;
