
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Layout from '../../components/Layout';

import BannerExperiencies from '../../assets/img/banner-experiencies.webp';
import Cocodrile from '../../assets/img/cocodrile.webp';
import Image1 from '../../assets/img/experiencia-1.webp';
import Image2 from '../../assets/img/experiencia-2.webp';
import Image3 from '../../assets/img/experiencia-3.webp';
import Image4 from '../../assets/img/experiencia-4.webp';
import ButtonArrow from '../../assets/img/arrow-button.svg';

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
	const items = React.Children.toArray(children)
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		delay: 200,
		opacity: open ? 1 : 0,
		x: open ? 0 : -20,
		height: open ? 130 : 80,
		from: { opacity: 0, x: -20, height: 80 },
	})
	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} className="trails-text" style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	)
}

const Experiencies = () => {
	const [loading, setLoading] = useState(true);
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-885);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalActive, setModalActive] = useState(1);
	const [selectedImage, setSelectedImage] = useState(0);
	const [galleryImages, setGalleryImages] = useState<string[]>([]);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsVisibleBanner3(scrollPosition > (headerHeight + 800));
		if (scrollPosition > 640 || isMobile) {
			setTopWolf(-571);
		} else {
			const parallaxSpeed = 0.5;
			const newTopWolf = -885 + (scrollPosition * parallaxSpeed);
			setTopWolf(newTopWolf);
		}
	};

	useEffect(() => {
		const images = [
			BannerExperiencies, Cocodrile, Image1, Image2, Image3, Image4
		];

		const imagePromises = images.map(src => {
			return new Promise<void>((resolve) => {
				const img = new Image();
				img.onload = img.onerror = () => resolve();
				img.src = src;
			});
		});

		Promise.all(imagePromises).then(() => {
			setLoading(false);
			setTitle(true);
			setTimeout(() => setIsVisible(true), 800);
			setTimeout(() => setIsVisibleBanner2(true), 1000);
		});

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (modalActive === 1) {
			const images = [Image1, Image2];
			setGalleryImages(images);
		} else if (modalActive === 2) {
			const images = [Image3, Image4];
			setGalleryImages(images);
		} else {
			setModalOpen(false);
		}
	}, [modalActive]);

	if (loading) {
		return (
			<div className='fixed inset-0 bg-white flex items-center justify-center z-50'>
				<div className='text-center'>
					<div className='w-16 h-16 border-4 border-principal border-t-transparent rounded-full animate-spin mx-auto'></div>
					<p className='text-principal mt-4 font-ruina text-xl'>Cargando...</p>
				</div>
			</div>
		);
	}

	return (
		<Layout>
			<div>
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerExperiencies})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Experiencias</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[24px] md:text-[35px] xl:text-[49px] montserrat-300 wfull max-w-[650px] leading-[26px] md:leading-[50px] mt-[30px] md:mt-[0px]">
									La experiencia y la calidad son parte de nuestra esencia
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[800px] md:w-[1200px] lg:w-[1600px] right-0 z-10 cocodrile-animate' style={{ top: topWolf + 'px' }}>
							<img src={Cocodrile} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-0 md:pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Vive experiencias únicas en
							el Bioparque Mazatlán.
						</h2>
						<p className='w-full max-w-[1100px] text-center mx-auto montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] leading-[28px] md:leading-[40px] xl:leading-[50px] -tracking-[1px]'>
							Cada área está diseñada para que aprendas, te diviertas y
							te conectes con la naturaleza.
						</p>
					</div>
					<div className='areas-buttons w-full max-w-[1100px] mx-auto flex flex-wrap justify-center gap-4 mt-10 px-4'>
						<Link to="/contacto" className='button button--secondary font-ruina'>Elefantes</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Jirafas</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Felinos</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Cocodrilario</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Hipopótamos</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Aviario</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Granja interactiva</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Reservas temáticas</Link>
						<Link to="/contacto" className='button button--secondary font-ruina'>Albercas y chapoteaderos</Link>
					</div>
				</section>

				<section className='w-full pb-10 relative'>
					<div className="w-full max-w-[1380px] mx-auto mb-20 px-10">
						<div className='w-full border-b border-gray mb-10 py-10'>
							<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
								<div className='w-full flex gap-4 mb-4 h-auto md:h-[500px] justify-between flex-wrap md:flex-nowrap'>
									<div className='basis-full md:basis-1/2 xl:basis-2/3'>
										<img onClick={() => { setModalActive(1); setModalOpen(true); setSelectedImage(0); }} src={Image1} alt="" className='w-full xl:w-auto h-full object-cover' />
									</div>
									<div className='basis-full md:basis-1/2 xl:basis-1/3'>
										<img onClick={() => { setModalActive(1); setModalOpen(true); setSelectedImage(1); }} src={Image2} alt="" className='h-auto md:h-full w-full xl:w-auto object-cover' />
									</div>
								</div>
							</animated.div>
							<div className='w-full flex gap-4 flex-wrap md:flex-nowrap'>
								<div className='basis-full md:basis-1/2 xl:basis-2/3 text-center sm:text-left'>
									<p className='text-principal plus-jakarta-sans-700 text-[32px] md:text-[38px] mb-4'>Elefantes</p>
									<p className='montserrat-300 text-principal text-[24px] xl:text-[27px] leading-[28px]'>
										Admira a los gigantes de la sabana
										en un hábitat seguro y educativo.
									</p>
								</div>
								<div className='buttons-experiences basis-full md:basis-1/2 xl:basis-1/3 flex justify-center sm:justify-start md:justify-end xl:justify-between flex-wrap sm:flex-nowrap items-start gap-4 sm:gap-1 pt-4'>
									<button onClick={() => { setModalActive(1); setModalOpen(true); setSelectedImage(0); }} className='button button--primary font-ruina relative flex justify-between items-center button--arrow' style={{ border: '1px solid #527752' }}>
										Ver galeria
										<img src={ButtonArrow} alt="" className='w-[18px] ml-4' />
									</button>
									<Link to="/contacto" className='button button--secondary font-ruina'>Compre boletos en línea</Link>
								</div>
							</div>
						</div>

						<div className='w-full border-b border-gray mb-10 py-10'>
							<div className='w-full flex gap-4 mb-4 h-auto md:h-[500px] justify-between flex-wrap md:flex-nowrap'>
								<div className='basis-full md:basis-1/2 xl:basis-2/3'>
									<img onClick={() => { setModalActive(2); setModalOpen(true); setSelectedImage(0); }} src={Image3} alt="" className='w-full xl:w-auto h-full object-cover' />
								</div>
								<div className='basis-full md:basis-1/2 xl:basis-1/3'>
									<img onClick={() => { setModalActive(2); setModalOpen(true); setSelectedImage(1); }} src={Image4} alt="" className='h-auto md:h-full w-full xl:w-auto object-cover' />
								</div>
							</div>
							<div className='w-full flex gap-4 flex-wrap md:flex-nowrap'>
								<div className='basis-full md:basis-1/2 xl:basis-2/3 text-center sm:text-left'>
									<p className='text-principal plus-jakarta-sans-700 text-[32px] md:text-[38px] mb-4'>Jirafas</p>
									<p className='montserrat-300 text-principal text-[24px] xl:text-[27px] leading-[28px]'>
										Alimenta a las jirafas y conoce curiosidades sobre su vida.
									</p>
								</div>
								<div className='buttons-experiences basis-full md:basis-1/2 xl:basis-1/3 flex justify-center sm:justify-start md:justify-end xl:justify-between flex-wrap sm:flex-nowrap items-start gap-4 sm:gap-1 pt-4'>
									<button onClick={() => { setModalActive(2); setModalOpen(true); setSelectedImage(0); }} className='button button--primary font-ruina relative flex justify-between items-center button--arrow' style={{ border: '1px solid #527752' }}>
										Ver galeria
										<img src={ButtonArrow} alt="" className='w-[18px] ml-4' />
									</button>
									<Link to="/contacto" className='button button--secondary font-ruina'>Compre boletos en línea</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{modalOpen && (
					<div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4' onClick={() => setModalOpen(false)}>
						<div className='relative w-auto' onClick={(e) => e.stopPropagation()}>
							<button onClick={() => setModalOpen(false)} className='absolute -top-12 -right-10 text-white text-4xl hover:text-gray-300'>&times;</button>
							<img src={galleryImages[selectedImage]} alt="" className='w-auto h-auto max-h-[70vh] object-contain mb-4' />
							<div className='flex gap-4 justify-center'>
								{galleryImages.map((img, index) => (
									<img
										key={index}
										src={img}
										alt=""
										className={`w-[150px] h-[100px] object-cover cursor-pointer border-2 ${selectedImage === index ? 'border-white' : 'border-transparent opacity-60'} hover:opacity-100`}
										onClick={() => setSelectedImage(index)}
									/>
								))}
							</div>
						</div>
					</div>
				)}

			</div>
		</Layout>
	)
}

export default Experiencies