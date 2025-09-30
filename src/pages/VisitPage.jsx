import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock, FaCar, FaWifi, FaUtensils, FaMusic } from 'react-icons/fa'

const VisitPage = () => {
  const amenities = [
    { icon: FaWifi, title: 'WiFi miễn phí', description: 'Kết nối internet tốc độ cao' },
    { icon: FaUtensils, title: 'Thực đơn đa dạng', description: 'Nhiều món ăn và thức uống' },
    { icon: FaCar, title: 'Bãi đỗ xe', description: 'Chỗ đỗ xe miễn phí cho khách' },
    { icon: FaMusic, title: 'Không gian yên tĩnh', description: 'Môi trường lý tưởng để làm việc' }
  ]

  const openingHours = [
    { day: 'Thứ 2 - Thứ 6', hours: '6:00 - 22:00' },
    { day: 'Thứ 7', hours: '7:00 - 23:00' },
    { day: 'Chủ nhật', hours: '7:00 - 21:00' }
  ]

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-vintage-green/70"></div>
        </div>
          <div className="relative z-10 text-center text-warm-beige">
          <h1 className="font-vintage text-4xl md:text-6xl font-bold mb-4 vintage-text-shadow">
            Đến thăm quán
          </h1>
          <p className="font-vintage-alt text-xl md:text-2xl vintage-text-shadow">
            Khám phá không gian ấm cúng của Zenttech Coffee
          </p>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="vintage-card p-8">
              <h2 className="font-vintage text-3xl font-bold text-vintage-green mb-8">
                Thông tin liên hệ
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vintage-green/10 rounded-full flex items-center justify-center mt-1">
                    <FaMapMarkerAlt className="text-xl text-vintage-green" />
                  </div>
                  <div>
                    <h3 className="font-vintage font-semibold text-vintage-green mb-2">Địa chỉ</h3>
                    <p className="font-vintage-alt text-coffee-brown">123 Đường Nguyễn Huệ</p>
                    <p className="font-vintage-alt text-coffee-brown">Quận 1, TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-vintage-green/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl text-vintage-green" />
                  </div>
                  <div>
                    <h3 className="font-vintage font-semibold text-vintage-green mb-2">Điện thoại</h3>
                    <p className="font-vintage-alt text-coffee-brown">(028) 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vintage-green/10 rounded-full flex items-center justify-center mt-1">
                    <FaClock className="text-xl text-vintage-green" />
                  </div>
                  <div>
                    <h3 className="font-vintage font-semibold text-vintage-green mb-4">Giờ mở cửa</h3>
                    <div className="space-y-2">
                      {openingHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-vintage-alt text-coffee-brown">{item.day}</span>
                          <span className="font-vintage-alt text-vintage-green font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="vintage-button text-lg px-8 py-4 inline-block"
                >
                  Xem trên Google Maps
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="vintage-card p-8">
              <h2 className="font-vintage text-3xl font-bold text-vintage-green mb-6">
                Bản đồ
              </h2>
              <div className="bg-light-brown/20 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-vintage-green/50 mx-auto mb-4" />
                  <p className="font-vintage-alt text-coffee-brown">
                    Bản đồ tương tác sẽ được tích hợp tại đây
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-vintage text-4xl font-bold text-vintage-green mb-6">
              Tiện ích tại quán
            </h2>
            <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
            <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto">
              Những tiện ích hiện đại trong không gian vintage ấm cúng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-vintage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="text-3xl text-vintage-green" />
                </div>
                <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-3">
                  {amenity.title}
                </h3>
                <p className="font-vintage-alt text-coffee-brown">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-vintage text-4xl font-bold text-vintage-green mb-6">
              Không gian quán
            </h2>
            <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
            <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto">
              Hình ảnh thực tế về không gian ấm cúng của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ].map((image, index) => (
              <div key={index} className="vintage-card overflow-hidden">
                <img 
                  src={image} 
                  alt={`Không gian quán ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisitPage
