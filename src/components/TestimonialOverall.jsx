import PropTypes from 'prop-types';
import Slider from "react-slick";
import IndexTestimonial from './IndexTestimonial';

function TestimonialOverall({ bgImg, commentData }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <section id="cards" className="relative h-[600px] bg-darkBlueGreen pb-32 mb-32 bg-cover bg-center" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="container flex-col flex max-w-6xl mx-auto px-5 justify-center items-center py-12 z-10">
        {/* Gradient Overlay - bottom */}
        <div className="gradient-overlay-2">
          {/* Gradient Overlay - top */}
          <div className="gradient-overlay flex flex-col space-y-5 justify-center text-center py-5">
            <h1 className="font-sans font-bold tracking-wide text-[#076976] text-3xl">Hear from satisifed customers</h1>
            {/* Slider of Testimonials */}
            <Slider {...settings}>          
                {commentData.map((commentItem)=>(
                  <IndexTestimonial key={commentItem.id} comment={commentItem.data.text} user={commentItem.data.username} />
                ))}    
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

TestimonialOverall.defaultProps = {
  bgImg: '',
  commentData: []
}

TestimonialOverall.propTypes = {
  bgImg: PropTypes.string.isRequired,
  commentData: PropTypes.array.isRequired
}

export default TestimonialOverall