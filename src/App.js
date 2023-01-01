import "./App.css";
import Mensaje from "./Mensaje";

function App() {
  const Description = () => {
    return <p>Esta es la app del curso fullstack bootcamp</p>;
  }; 

  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="blue" message="en el curso" />
      <Mensaje color="green" message="bootcamp fullstack" />
      <Description />
    </div>
  );
}

export default App;
