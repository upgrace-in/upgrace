import Title from './components/Title'
import Review from './components/Review'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Work from './components/Work'
import AcquiredSkills from './components/AcquiredSkills'
import $ from 'jquery'

export default function App() {

  function show_nav() {
    $('.nav_mob').removeClass('animate__zoomOut');
    $('.nav_mob').addClass('animate__zoomIn').show();
    $('.bars').hide();
    $('.bars2').show();
  }

  function hide_nav() {
    $('.bars').show();
    $('.bars2').hide();
    $('.nav_mob').removeClass('animate__zoomIn');
    $('.nav_mob').addClass('animate__zoomOut');
    setTimeout(function () {
      $('.nav_mob').hide();
    }, 200);
  }

  return (
    <div>
      <Navbar show_nav={show_nav} hide_nav={hide_nav} />
      <Title />
      <AcquiredSkills />
      <Work />
      <Review />
      <Contact />
    </div>
  )
}