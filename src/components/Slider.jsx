import { Swiper, SwiperSlide } from 'swiper/react'


// CSS
import '../css/Slider.css'

// IMAGES
import image1 from '../assets/divulgação etiquetas.jpg';
import image2 from '../assets/Divulgação agenda 2023.png';


const data = [
    { id: 1, image: image1 },
    { id: 2, image: image2 }
];



const Slider = () => {
  return (
    <div>
        <section className="slider pt-48 ">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true}}
                navigation
            
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex">
                            <img
                            src={item.image}
                            alt="Agendas Multicopia"
                            className='slide-item'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </div>
  )
}

export default Slider
