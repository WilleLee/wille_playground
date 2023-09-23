import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/Home";
import TodoPage from "./routes/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
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
