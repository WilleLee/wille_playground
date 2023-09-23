import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>this is home</h1>
      <button
        onClick={() => {
          navigate("/todo");
        }}
      >
        TO DO LIST
      </button>
      <button
        onClick={() => {
          navigate("/headless");
        }}
      >
        HEADLESS COMPONENTS
      </button>
    </div>
  );
};

export default HomePage;
