import React from 'react'
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-vintage-green text-warm-beige relative overflow-hidden px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-warm-beige rounded-full"></div>
        <div className="absolute top-20 left-20 w-1 h-1 bg-warm-beige rounded-full"></div>
        <div className="absolute top-30 left-30 w-2 h-2 bg-warm-beige rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-warm-beige rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-warm-beige rounded-full"></div>
        <div className="absolute bottom-30 right-30 w-1 h-1 bg-warm-beige rounded-full"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                {/* <div className="w-12 h-12 bg-warm-beige rounded-full flex items-center justify-center">
                  <span className="text-vintage-green font-vintage font-bold text-2xl">Z</span>
                </div> */}
                <h3 className="font-vintage text-3xl font-bold text-warm-beige">
                  Zenttech Coffee
                </h3>
              </div>
              <p className="font-vintage-alt text-warm-beige/90 mb-6 leading-relaxed max-w-md">
                Hơn 70 năm gìn giữ và phát triển hương vị cà phê truyền thống Việt Nam. 
                Mỗi tách cà phê là một câu chuyện về văn hóa và tình yêu.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center hover:bg-warm-beige/30 transition-colors duration-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center hover:bg-warm-beige/30 transition-colors duration-300">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center hover:bg-warm-beige/30 transition-colors duration-300">
                  <FaPinterest className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center hover:bg-warm-beige/30 transition-colors duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-vintage text-xl font-semibold mb-6">Thông tin liên hệ</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-beige/20 rounded-full flex items-center justify-center mt-0.5">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-vintage-alt text-warm-beige/90">123 Đường Nguyễn Huệ</p>
                    <p className="font-vintage-alt text-warm-beige/90">Quận 1, TP.HCM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-beige/20 rounded-full flex items-center justify-center">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <p className="font-vintage-alt text-warm-beige/90">(028) 1234 5678</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-warm-beige/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <p className="font-vintage-alt text-warm-beige/90">info@zenttechcoffee.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-vintage text-xl font-semibold mb-6">Giờ mở cửa</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-vintage-alt text-light-green/90">Thứ 2 - Thứ 6</span>
                  <span className="font-vintage-alt text-light-green">6:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-vintage-alt text-light-green/90">Thứ 7</span>
                  <span className="font-vintage-alt text-light-green">7:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-vintage-alt text-light-green/90">Chủ nhật</span>
                  <span className="font-vintage-alt text-light-green">7:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-beige/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-vintage-alt text-warm-beige/80">
              © 2024 Zenttech Coffee. Tất cả quyền được bảo lưu.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-warm-beige/80 hover:text-warm-beige transition-colors duration-300"
            >
              <span className="font-vintage-alt">Lên đầu trang</span>
              <FaArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer