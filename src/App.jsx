import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/Home";
import HeadlessPage from "./routes/Headless";
import TodosPage from "./routes/TodosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
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
