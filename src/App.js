import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <HeadlineCards></HeadlineCards>
        <Food></Food>
        <Category></Category>
    </div>
  );
}

export default App;
