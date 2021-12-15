import Map from "./components/map/Map";
import GeolocationProvider from "./components/store/map-store/GeolocationProvider";
import ExercisesContainer from "./components/exercices/ExercisesContainer";

function App() {
  return (
    <GeolocationProvider>
      <div className="app-container">
        <Map />
        <ExercisesContainer />
      </div>
    </GeolocationProvider>
  );
}

export default App;
