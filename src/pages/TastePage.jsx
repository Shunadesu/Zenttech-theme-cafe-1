import React, { useState } from 'react'
import { FaCoffee, FaStar, FaClock, FaLeaf, FaShoppingCart, FaHeart } from 'react-icons/fa'

const TastePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tất cả', icon: FaCoffee },
    { id: 'traditional', name: 'Truyền thống', icon: FaLeaf },
    { id: 'specialty', name: 'Đặc biệt', icon: FaStar },
    { id: 'seasonal', name: 'Theo mùa', icon: FaClock }
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Cà phê sữa đá',
      description: 'Hương vị truyền thống Việt Nam với lớp sữa đặc đậm đà',
      price: '25.000đ',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'traditional',
      rating: 4.9,
      prepTime: '3 phút',
      featured: true
    },
    {
      id: 2,
      name: 'Cà phê đen nóng',
      description: 'Cà phê Robusta nguyên chất, đậm đà và thơm ngon',
      price: '20.000đ',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'traditional',
      rating: 4.8,
      prepTime: '2 phút'
    },
    {
      id: 3,
      name: 'Cà phê trứng',
      description: 'Độc đáo với lớp kem trứng mịn màng trên mặt cà phê',
      price: '35.000đ',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'specialty',
      rating: 4.9,
      prepTime: '5 phút',
      featured: true
    },
    {
      id: 4,
      name: 'Bạc xỉu',
      description: 'Cà phê sữa đá với tỷ lệ sữa nhiều hơn, ngọt ngào',
      price: '28.000đ',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'traditional',
      rating: 4.7,
      prepTime: '3 phút'
    },
    {
      id: 5,
      name: 'Cà phê dừa',
      description: 'Cà phê đen với nước cốt dừa tươi, hương vị nhiệt đới',
      price: '32.000đ',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'seasonal',
      rating: 4.8,
      prepTime: '4 phút'
    },
    {
      id: 6,
      name: 'Cà phê kem sữa',
      description: 'Cà phê đen với lớp kem sữa tươi mát lạnh',
      price: '30.000đ',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'specialty',
      rating: 4.6,
      prepTime: '4 phút'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-vintage-green/70"></div>
        </div>
        <div className="relative z-10 text-center text-warm-beige">
          <h1 className="font-vintage text-4xl md:text-6xl font-bold mb-4 vintage-text-shadow">
            Thưởng thức ngay
          </h1>
          <p className="font-vintage-alt text-xl md:text-2xl vintage-text-shadow">
            Khám phá menu cà phê đa dạng với hương vị đặc trưng
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-vintage text-3xl font-bold text-vintage-green mb-6">
              Chọn loại cà phê yêu thích
            </h2>
            <div className="w-24 h-1 bg-vintage-green mx-auto mb-8"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-vintage-green text-warm-beige'
                    : 'bg-vintage-green/10 text-vintage-green hover:bg-vintage-green/20 border border-vintage-green/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="vintage-card overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-vintage-green text-warm-beige px-3 py-1 rounded-full text-sm font-medium">
                      <FaStar className="inline w-3 h-3 mr-1" />
                      Nổi bật
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-cream/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaHeart className="w-5 h-5 text-vintage-green" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-vintage text-xl font-semibold text-vintage-green">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <FaStar className="w-4 h-4 text-yellow-500" />
                      <span className="font-vintage-alt text-sm text-coffee-brown">{item.rating}</span>
                    </div>
                  </div>

                  <p className="font-vintage-alt text-coffee-brown mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-coffee-brown">
                      <FaClock className="w-4 h-4" />
                      <span>{item.prepTime}</span>
                    </div>
                    <span className="font-vintage text-xl font-bold text-olive-green">
                      {item.price}
                    </span>
                  </div>

                  <button className="w-full vintage-button flex items-center justify-center space-x-2">
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Thêm vào giỏ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-warm-beige">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-vintage text-3xl font-bold text-vintage-green mb-6">
              Ưu đãi đặc biệt
            </h2>
            <div className="w-24 h-1 bg-vintage-green mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="vintage-card p-6 text-center bg-vintage-green/10">
              <div className="w-16 h-16 bg-vintage-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCoffee className="text-2xl text-olive-green" />
              </div>
              <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-3">
                Combo buổi sáng
              </h3>
              <p className="font-vintage-alt text-coffee-brown mb-4">
                Cà phê + bánh mì chỉ từ 45.000đ
              </p>
              <span className="font-vintage text-lg font-bold text-olive-green">
                Tiết kiệm 15%
              </span>
            </div>

            <div className="vintage-card p-6 text-center bg-sage-green/10">
              <div className="w-16 h-16 bg-sage-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-2xl text-sage-green" />
              </div>
              <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-3">
                Thành viên VIP
              </h3>
              <p className="font-vintage-alt text-coffee-brown mb-4">
                Giảm 20% cho mọi đơn hàng
              </p>
              <span className="font-vintage text-lg font-bold text-sage-green">
                Đăng ký miễn phí
              </span>
            </div>

            <div className="vintage-card p-6 text-center bg-light-brown/20">
              <div className="w-16 h-16 bg-light-brown/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-coffee-brown" />
              </div>
              <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-3">
                Cà phê ngày lễ
              </h3>
              <p className="font-vintage-alt text-coffee-brown mb-4">
                Menu đặc biệt cho các dịp lễ
              </p>
              <span className="font-vintage text-lg font-bold text-coffee-brown">
                Hạn chế thời gian
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-vintage-green text-warm-beige">
        <div className="container-max text-center">
          <h2 className="font-vintage text-4xl font-bold mb-6">
            Sẵn sàng thưởng thức?
          </h2>
          <p className="font-vintage-alt text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Đặt hàng ngay để trải nghiệm hương vị cà phê tuyệt vời 
            hoặc đến thăm quán để tận hưởng không gian ấm cúng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/visit" className="vintage-button bg-warm-beige text-vintage-green hover:bg-warm-beige/90 hover:text-vintage-green">
              Đến thăm quán
            </a>
            <button className="vintage-button bg-transparent border-2 border-light-green text-warm-beige hover:bg-warm-beige hover:text-vintage-green">
              Đặt hàng online
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TastePage
