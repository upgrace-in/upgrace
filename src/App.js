import Title from './components/Title'
import { Review, ReviewCon } from './components/Review'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Work, WorkCon } from './components/Work'
import { AcquiredSkills, SkillCon } from './components/AcquiredSkills'
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

  // fetch('https://files.upgrace.in/data.json', { headers: {'Origin': 'http://localhost:3002/'}})
  //   .then(function (response) {
  //     console.log(response);
  //   }).catch(function (error) {
  //     console.log('Request failed', error)
  //   });
  
  return (
    <div className='col-md-12'>
      <Navbar show_nav={show_nav} hide_nav={hide_nav} />
      <Title />
      <WorkCon hide={false} sec={false} />
      <Footer />

      <AcquiredSkills />
      <Work />
      <Review />
    </div>
  )
}