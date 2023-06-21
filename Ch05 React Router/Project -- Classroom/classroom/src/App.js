import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom"
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

function App() {

  //Router implementation
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "courses",

          children: [
            { index: true, element: <Courses /> },
            { path: ":id",
            element:<Details/>
            }
          ] 
        },
        {
          path:'/learn/:id',
          element:<Learn/>,
          children:[
            {index: true, element: <Chapter/>},
            {path:'chapter/:id', element: <Chapter/> },
          ]

        }
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
