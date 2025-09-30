import React from 'react'
import { FaCoffee, FaLeaf, FaAward, FaUsers, FaHeart, FaSeedling } from 'react-icons/fa'

const StoryPage = () => {
  const timeline = [
    {
      year: '1950',
      title: 'Khởi đầu',
      description: 'Ông Nguyễn Văn A bắt đầu với một quán cà phê nhỏ trên đường Nguyễn Huệ, chuyên pha chế cà phê theo phương pháp truyền thống.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '1965',
      title: 'Mở rộng',
      description: 'Quán được mở rộng và trở thành điểm đến yêu thích của giới trí thức Sài Gòn. Nhiều nhà văn, nhạc sĩ thường xuyên lui tới.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '1980',
      title: 'Thế hệ thứ hai',
      description: 'Con trai ông A tiếp quản và hiện đại hóa quy trình pha chế nhưng vẫn giữ nguyên hương vị truyền thống.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2000',
      title: 'Đổi mới',
      description: 'Quán được đổi tên thành Zenttech Coffee và mở rộng thêm nhiều chi nhánh, nhưng vẫn giữ nguyên tinh thần ban đầu.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2024',
      title: 'Hiện tại',
      description: 'Thế hệ thứ ba tiếp tục gìn giữ và phát triển, mang hương vị cà phê Việt đến với thế giới.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const values = [
    {
      icon: FaHeart,
      title: 'Tình yêu với cà phê',
      description: 'Mỗi tách cà phê được pha chế với tình yêu và sự tận tâm, mang đến hương vị tuyệt vời nhất.'
    },
    {
      icon: FaLeaf,
      title: 'Nguyên liệu tự nhiên',
      description: 'Chúng tôi chỉ sử dụng những hạt cà phê chất lượng cao từ các vùng trồng uy tín tại Việt Nam.'
    },
    {
      icon: FaUsers,
      title: 'Cộng đồng',
      description: 'Tạo ra một không gian kết nối, nơi mọi người có thể gặp gỡ, chia sẻ và tạo nên những kỷ niệm đẹp.'
    },
    {
      icon: FaAward,
      title: 'Chất lượng',
      description: 'Luôn đặt chất lượng lên hàng đầu, từ khâu chọn lựa nguyên liệu đến quy trình pha chế.'
    }
  ]

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-vintage-green/70"></div>
        </div>
        <div className="relative z-10 text-center text-warm-beige">
          <h1 className="font-vintage text-4xl md:text-6xl font-bold mb-4 vintage-text-shadow">
            Khám phá câu chuyện
          </h1>
          <p className="font-vintage-alt text-xl md:text-2xl vintage-text-shadow">
            70 năm gìn giữ hương vị cà phê truyền thống
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-vintage text-4xl font-bold text-vintage-green mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="w-24 h-1 bg-olive-green mb-8"></div>
              <div className="space-y-6 text-coffee-brown leading-relaxed">
                <p className="font-vintage-alt text-lg">
                  Từ một quán cà phê nhỏ trên đường Nguyễn Huệ năm 1950, 
                  <span className="font-semibold text-vintage-green"> Zenttech Coffee</span> đã trở thành 
                  một thương hiệu cà phê được yêu thích với hơn 70 năm lịch sử.
                </p>
                <p className="font-vintage-alt text-lg">
                  Chúng tôi tin rằng mỗi tách cà phê không chỉ là một thức uống, 
                  mà còn là một câu chuyện về văn hóa, truyền thống và tình yêu 
                  của những người làm cà phê qua nhiều thế hệ.
                </p>
                <p className="font-vintage-alt text-lg">
                  Từ những hạt cà phê Robusta được tuyển chọn kỹ lưỡng từ 
                  Tây Nguyên, đến không gian quán mang phong cách vintage 
                  ấm cúng, mỗi chi tiết đều được chăm chút để mang đến 
                  trải nghiệm hoàn hảo nhất cho khách hàng.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cà phê truyền thống"
                className="w-full h-96 object-cover rounded-2xl shadow-vintage-lg"
              />
              <div className="absolute -bottom-6 -right-6 vintage-card p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center">
                    <FaSeedling className="text-xl text-sage-green" />
                  </div>
                  <div>
                    <h4 className="font-vintage font-semibold text-vintage-green">70+ năm</h4>
                    <p className="font-vintage-alt text-sm text-coffee-brown">Kinh nghiệm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-vintage text-4xl font-bold text-vintage-green mb-6">
              Hành trình phát triển
            </h2>
            <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
            <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto">
              Những dấu mốc quan trọng trong lịch sử 70 năm của Zenttech Coffee
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="vintage-card p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-vintage-green/10 rounded-full flex items-center justify-center">
                        <span className="font-vintage text-2xl font-bold text-vintage-green">{item.year}</span>
                      </div>
                      <h3 className="font-vintage text-2xl font-bold text-vintage-green">{item.title}</h3>
                    </div>
                    <p className="font-vintage-alt text-lg text-coffee-brown leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-vintage"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-vintage text-4xl font-bold text-vintage-green mb-6">
              Giá trị cốt lõi
            </h2>
            <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
            <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto">
              Những giá trị đã được gìn giữ và phát triển qua nhiều thế hệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-vintage-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-3xl text-vintage-green" />
                </div>
                <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-4">
                  {value.title}
                </h3>
                <p className="font-vintage-alt text-coffee-brown leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-vintage-green text-warm-beige">
        <div className="container-max text-center">
          <h2 className="font-vintage text-4xl font-bold mb-6">
            Trở thành một phần của câu chuyện
          </h2>
          <p className="font-vintage-alt text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Hãy đến và trải nghiệm hương vị cà phê truyền thống, 
            tạo nên những kỷ niệm đẹp cùng chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/visit" className="vintage-button bg-warm-beige text-vintage-green hover:bg-warm-beige/90 hover:text-vintage-green">
              Đến thăm quán
            </a>
            <a href="/menu" className="vintage-button bg-transparent border-2 border-light-green text-warm-beige hover:bg-warm-beige hover:text-vintage-green">
              Xem thực đơn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoryPage
