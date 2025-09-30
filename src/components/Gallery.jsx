import React, { useState } from 'react'
import { FaSearchPlus, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Không gian quán cà phê vintage',
      title: 'Không gian ấm cúng'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hạt cà phê Robusta chất lượng cao',
      title: 'Hạt cà phê tươi'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tách cà phê sữa đá truyền thống',
      title: 'Cà phê sữa đá'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Quầy pha chế cà phê',
      title: 'Quầy pha chế'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cà phê đen nguyên chất',
      title: 'Cà phê đen nóng'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Máy pha cà phê cổ điển',
      title: 'Máy pha truyền thống'
    }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="section-padding bg-warm-beige relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-vintage text-4xl md:text-5xl font-bold text-vintage-green mb-6">
            Bộ sưu tập hình ảnh
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-6"></div>
          <p className="font-vintage-alt text-xl text-coffee-brown max-w-2xl mx-auto leading-relaxed">
            Khám phá không gian và hương vị đặc trưng của Zenttech Coffee
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-vintage hover:shadow-vintage-lg transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-light-green">
                    <h3 className="font-vintage text-xl font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="font-vintage-alt text-sm opacity-90">
                      Nhấn để xem chi tiết
                    </p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-light-green/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaSearchPlus className="w-5 h-5 text-vintage-green" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="font-vintage-alt text-lg text-coffee-brown mb-6">
            Muốn trải nghiệm không gian thực tế?
          </p>
          <button className="vintage-button text-lg px-8 py-4">
            Đến thăm quán
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <FaTimes className="w-6 h-6 text-gray-800" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4">
              <h3 className="font-vintage text-xl font-semibold text-vintage-green mb-2">
                {selectedImage.title}
              </h3>
              <p className="font-vintage-alt text-coffee-brown">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sage-green/10 rounded-full"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-light-brown/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-olive-green/10 rounded-full"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-coffee-brown/20 rounded-full"></div>
    </section>
  )
}

export default Gallery
