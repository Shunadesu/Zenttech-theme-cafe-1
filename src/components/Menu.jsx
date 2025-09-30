import React from 'react'

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Cà phê sữa đá',
      description: 'Hương vị truyền thống Việt Nam với lớp sữa đặc đậm đà',
      price: '25.000đ',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Cà phê đen nóng',
      description: 'Cà phê Robusta nguyên chất, đậm đà và thơm ngon',
      price: '20.000đ',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Cà phê trứng',
      description: 'Độc đáo với lớp kem trứng mịn màng trên mặt cà phê',
      price: '35.000đ',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Bạc xỉu',
      description: 'Cà phê sữa đá với tỷ lệ sữa nhiều hơn, ngọt ngào',
      price: '28.000đ',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Cà phê dừa',
      description: 'Cà phê đen với nước cốt dừa tươi, hương vị nhiệt đới',
      price: '32.000đ',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Cà phê kem sữa',
      description: 'Cà phê đen với lớp kem sữa tươi mát lạnh',
      price: '30.000đ',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section id="menu" className="section-padding bg-warm-beige">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-vintage text-4xl md:text-5xl font-bold text-vintage-green mb-6">
            Thực đơn cà phê
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
          <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto leading-relaxed">
            Khám phá những hương vị cà phê đặc trưng của Việt Nam, 
            được pha chế theo công thức truyền thống
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="vintage-card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-green/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-vintage text-2xl font-semibold text-vintage-green mb-3">
                  {item.name}
                </h3>
                <p className="font-vintage-alt text-coffee-brown mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-vintage text-2xl font-bold text-olive-green">
                    {item.price}
                  </span>
                  <button className="vintage-button text-sm px-4 py-2">
                    Đặt món
                  </button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-green/20 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="font-vintage-alt text-lg text-coffee-brown mb-6">
            Muốn xem toàn bộ thực đơn?
          </p>
          <button className="vintage-button text-lg px-8 py-4">
            Xem thực đơn đầy đủ
          </button>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-green/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-brown/10 rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-olive-green/5 rounded-full"></div>
      </div>
    </section>
  )
}

export default Menu
