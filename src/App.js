import NavBar from './components/NavBar/NavBar';
import TitleParticles from './components/TitleParticles/TitleParticles';

const App = () => {
  const scrollHandler = section => {

  };

  return (
    <div>
      <NavBar scroll={scrollHandler} />
      <TitleParticles scroll={scrollHandler} />
    </div>
  );
};

export default App;
