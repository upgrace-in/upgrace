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

  return (
    <div className='col-md-12'>
      <div className='floatICONABS'>
        <a href="https://wa.me/+917001617004" target="_blank">
          <i class="fab fa-whatsapp floatICON"></i>
        </a>
      </div>
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