import React from 'react'
import { FaCoffee, FaLeaf, FaHeart, FaTrophy, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-warm-beige relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-vintage text-4xl md:text-5xl font-bold text-vintage-green mb-8">
              Câu chuyện của chúng tôi
            </h2>
            <div className="w-24 h-1 bg-vintage-green mb-8"></div>
            
            <div className="space-y-6 text-coffee-brown leading-relaxed">
              <p className="font-vintage-alt text-lg">
                Từ năm 1950, <span className="font-semibold text-vintage-green">Zenttech Coffee</span> đã bắt đầu 
                hành trình mang đến những tách cà phê đậm đà hương vị Việt Nam. 
                Chúng tôi tin rằng mỗi tách cà phê không chỉ là một thức uống, 
                mà còn là một câu chuyện về văn hóa và truyền thống.
              </p>
              
              <p className="font-vintage-alt text-lg">
                Với hơn 70 năm kinh nghiệm, chúng tôi đã gìn giữ và phát triển 
                những công thức pha chế cà phê truyền thống, kết hợp với 
                những kỹ thuật hiện đại để tạo ra hương vị độc đáo, 
                không thể tìm thấy ở bất kỳ đâu khác.
              </p>
              
              <p className="font-vintage-alt text-lg">
                Từ những hạt cà phê Robusta được tuyển chọn kỹ lưỡng từ 
                Tây Nguyên, đến không gian quán mang phong cách vintage 
                ấm cúng, mỗi chi tiết đều được chăm chút để mang đến 
                trải nghiệm hoàn hảo nhất cho khách hàng.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-vintage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCoffee className="text-2xl text-vintage-green" />
                </div>
                <h3 className="font-vintage font-semibold text-vintage-green mb-2">70+ năm</h3>
                <p className="font-vintage-alt text-sm text-coffee-brown">Kinh nghiệm pha chế</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-vintage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-2xl text-vintage-green" />
                </div>
                <h3 className="font-vintage font-semibold text-vintage-green mb-2">100%</h3>
                <p className="font-vintage-alt text-sm text-coffee-brown">Cà phê Việt Nam</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-vintage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-2xl text-vintage-green" />
                </div>
                <h3 className="font-vintage font-semibold text-vintage-green mb-2">Truyền thống</h3>
                <p className="font-vintage-alt text-sm text-coffee-brown">Được gìn giữ</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cà phê truyền thống Việt Nam"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-vintage-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vintage-green/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 vintage-card p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-vintage-green/20 rounded-full flex items-center justify-center">
                  <FaTrophy className="text-xl text-vintage-green" />
                </div>
                <div>
                  <h4 className="font-vintage font-semibold text-vintage-green">Giải thưởng</h4>
                  <p className="font-vintage-alt text-sm text-coffee-brown">Cà phê ngon nhất 2023</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 vintage-card p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-vintage-green/20 rounded-full flex items-center justify-center">
                  <FaStar className="text-xl text-vintage-green" />
                </div>
                <div>
                  <h4 className="font-vintage font-semibold text-vintage-green">Đánh giá</h4>
                  <p className="font-vintage-alt text-sm text-coffee-brown">4.9/5 từ khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage-green/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-light-brown/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      {/* Vintage Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-vintage-green rounded-full"></div>
        <div className="absolute top-40 left-40 w-1 h-1 bg-coffee-brown rounded-full"></div>
        <div className="absolute top-60 left-60 w-2 h-2 bg-olive-green rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-vintage-green rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-coffee-brown rounded-full"></div>
        <div className="absolute bottom-60 right-60 w-1 h-1 bg-olive-green rounded-full"></div>
      </div>
    </section>
  )
}

export default About
