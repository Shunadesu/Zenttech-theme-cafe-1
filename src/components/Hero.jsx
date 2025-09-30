import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroSlides = [
    {
      id: 1,
      background: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Hương vị của ký ức',
      subtitle: 'trong từng tách cà phê',
      description: 'Thưởng thức không gian xưa, đậm đà vị cà phê Việt',
      ctaText: 'Xem thực đơn',
      ctaLink: '#menu',
      ctaAction: scrollToMenu
    },
    {
      id: 2,
      background: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Truyền thống 70 năm',
      subtitle: 'gìn giữ hương vị',
      description: 'Từ năm 1950, chúng tôi đã mang đến những tách cà phê đậm đà nhất',
      ctaText: 'Khám phá câu chuyện',
      ctaLink: '/story',
      ctaAction: null
    },
    {
      id: 3,
      background: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Hạt cà phê tươi',
      subtitle: 'từ Tây Nguyên',
      description: 'Những hạt Robusta được tuyển chọn kỹ lưỡng, mang hương vị đặc trưng',
      ctaText: 'Thưởng thức ngay',
      ctaLink: '/taste',
      ctaAction: null
    },
    {
      id: 4,
      background: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Không gian ấm cúng',
      subtitle: 'như ngôi nhà thứ hai',
      description: 'Nơi bạn có thể thư giãn và tận hưởng những khoảnh khắc tuyệt vời',
      ctaText: 'Đến thăm quán',
      ctaLink: '/visit',
      ctaAction: null
    }
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-vintage',
          bulletActiveClass: 'swiper-pagination-bullet-active-vintage',
        }}
        navigation={{
          nextEl: '.swiper-button-next-vintage',
          prevEl: '.swiper-button-prev-vintage',
        }}
        loop={true}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-screen flex items-center justify-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.background}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-vintage-green/60"></div>
                </div>
              </div>

              {/* Floating Coffee Beans Animation */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-4 h-4 bg-coffee-brown/30 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-sage-green/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-20 w-5 h-5 bg-light-brown/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 right-10 w-3 h-3 bg-coffee-brown/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* Content */}
              <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <div className="animate-fade-in">
                  {/* Main Title */}
                  <h1 className="font-vintage text-4xl md:text-6xl lg:text-7xl font-bold text-warm-beige mb-6 vintage-text-shadow leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-warm-beige/80">{slide.subtitle}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="font-vintage-alt text-xl md:text-2xl text-warm-beige/90 mb-8 max-w-2xl mx-auto leading-relaxed vintage-text-shadow">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  {slide.ctaAction ? (
                    <button
                      onClick={slide.ctaAction}
                      className="vintage-button text-lg px-8 py-4 bg-warm-beige text-vintage-green hover:bg-warm-beige/90 hover:text-vintage-green transform hover:scale-105 shadow-vintage-lg"
                    >
                      {slide.ctaText}
                    </button>
                  ) : (
                    <Link
                      to={slide.ctaLink}
                      className="vintage-button text-lg px-8 py-4 bg-warm-beige text-vintage-green hover:bg-warm-beige/90 hover:text-vintage-green transform hover:scale-105 shadow-vintage-lg inline-block"
                    >
                      {slide.ctaText}
                    </Link>
                  )}
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-light-green/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-light-green/70 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div> */}
              </div>

              {/* Vintage Decorative Elements */}
              {/* <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent to-light-green/30 hidden lg:block"></div>
              <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent to-light-green/30 hidden lg:block"></div>
              <div className="absolute bottom-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent to-light-brown/40 hidden lg:block"></div>
              <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent to-light-brown/40 hidden lg:block"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-vintage absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-warm-beige/20 hover:bg-warm-beige/30 rounded-full flex items-center justify-center text-warm-beige transition-all duration-300 cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next-vintage absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-warm-beige/20 hover:bg-warm-beige/30 rounded-full flex items-center justify-center text-warm-beige transition-all duration-300 cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-vintage absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"></div>
    </section>
  )
}

export default Hero
