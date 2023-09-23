import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/Home";
import TodoPage from "./routes/Todo";
import HeadlessPage from "./routes/Headless";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
  {
    path: "/headless",
    element: <HeadlessPage />,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
