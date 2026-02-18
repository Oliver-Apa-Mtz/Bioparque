
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Layout from '../../components/Layout';

import BannerHospedaje from '../../assets/img/banner-hospedaje.webp';
import Ave from '../../assets/img/ave.svg';
import ButtonArrow from '../../assets/img/arrow-small.svg';
import BannerMap from '../../assets/img/map-dark.webp';
import Habitacion1 from '../../assets/img/habitacion-1.webp';
import Habitacion2 from '../../assets/img/habitacion-2.webp';
import Habitacion3 from '../../assets/img/habitacion-3.webp';
import Check from '../../assets/img/check.svg';
import BlueEffect from '../../assets/img/wave-effect-3.png';

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

const Housing = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-988);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);
	const [galleryImages] = useState([Habitacion1, Habitacion2, Habitacion3]);

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
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsVisibleBanner3(scrollPosition > (headerHeight + 800));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 2200));
		if (scrollPosition > 640 || isMobile) {
			setTopWolf(-671);
		} else {
			const parallaxSpeed = 0.5;
			const newTopWolf = -988 + (scrollPosition * parallaxSpeed);
			setTopWolf(newTopWolf);
		}
	};

	useEffect(() => {
		setTitle(true);
		setTimeout(() => {
			setIsVisible(true);
		}, 800);
		setTimeout(() => {
			setIsVisibleBanner2(true);
		}, 1000);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [modalOpen]);

	return (
		<Layout>
			<div>
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[300px]" style={{ backgroundImage: `url(${BannerHospedaje})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Hospedate</span>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">En Bioparc</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[24px] md:text-[35px] xl:text-[49px] montserrat-300 wfull max-w-[850px] leading-[26px] md:leading-[50px] mt-[30px] md:mt-[0px]">
									Haz de tu visita al Bioparque una experiencia
									completa quedándote en nuestras áreas de hospedaje.
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[800px] md:w-[1200px] lg:w-[1600px] right-0 z-10 cocodrile-animate' style={{ top: topWolf + 'px' }}>
							<img src={Ave} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-0 md:pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							cabañas y eco-lodges.
						</h2>
						<p className='w-full max-w-[1100px] text-center mx-auto montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] leading-[28px] md:leading-[40px] xl:leading-[50px] -tracking-[1px]'>
							Vive la naturaleza de día y de noche en
							espacios diseñados para tu comodidad.
						</p>
						<p className='text-[30px] text-principal my-20 uppercase text-center font-ruina tracking-[6px]'>Tipos de habitación</p>
					</div>
					<div className='absolute w-full right-0 top-[60px] z-10'>
						<img src={BlueEffect} alt="" className='w-full' />
					</div>
				</section>

				<section className='w-full pb-10 mb-10 relative z-10'>
					<div className="w-full max-w-[1380px] mx-auto px-10">
						<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
							<div className='w-full flex gap-4 justify-center lg:justify-between flex-wrap lg:flex-nowrap'>
								<div className='w-full max-w-[336px] lg:max-w-[424px] mb-10 lg:mb-0'>
									<div className='w-full h-[320px] md:h-[400px] xl:h-[476px] bg-cover bg-center cursor-pointer' style={{ backgroundImage: `url(${Habitacion1})` }} onClick={() => { setModalOpen(true); setSelectedImage(0); }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] text-center h-auto md:h-[120px] py-4 md:py-0'>Eco-lodges familiares</p>
										<button onClick={() => { setModalOpen(true); setSelectedImage(0); }} className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</button>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[24px] md:text-[35px] xl:text-[50px] my-2'>$950 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
										<p className='montserrat-300 text-[#959191] text-[16px] my-2'>con opciones adaptadas a familias, parejas y grupos.</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Reserva ahora
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Acceso a Wi-Fi gratuito
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Desayuno
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Estacionamiento
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Frigobar
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Jabón biodegradable para manos y cuerpo
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Toalla por huésped
										</p>
									</div>
								</div>
								<div className='w-full max-w-[336px] lg:max-w-[424px] mb-10 lg:mb-0'>
									<div className='w-full h-[320px] md:h-[400px] xl:h-[476px] bg-cover bg-center cursor-pointer' style={{ backgroundImage: `url(${Habitacion2})` }} onClick={() => { setModalOpen(true); setSelectedImage(1); }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] text-center h-auto md:h-[120px] py-4 md:py-0'>Cabañas privadas</p>
										<button onClick={() => { setModalOpen(true); setSelectedImage(1); }} className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</button>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[24px] md:text-[35px] xl:text-[50px] my-2'>$850 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
										<p className='montserrat-300 text-[#959191] text-[16px] my-2'>con opciones adaptadas a familias, parejas y grupos.</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Reserva ahora
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Acceso a Wi-Fi gratuito
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Desayuno
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Estacionamiento
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Frigobar
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Jabón biodegradable para manos y cuerpo
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Toalla por huésped
										</p>
									</div>
								</div>
								<div className='w-full max-w-[336px] lg:max-w-[424px] mb-10 lg:mb-0'>
									<div className='w-full h-[320px] md:h-[400px] xl:h-[476px] bg-cover bg-center cursor-pointer' style={{ backgroundImage: `url(${Habitacion3})` }} onClick={() => { setModalOpen(true); setSelectedImage(2); }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] text-center h-auto md:h-[120px] py-4 md:py-0'>Área de camping</p>
										<button onClick={() => { setModalOpen(true); setSelectedImage(1); }} className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</button>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[24px] md:text-[35px] xl:text-[50px] my-2'>$650 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
										<p className='montserrat-300 text-[#959191] text-[16px] my-2'>con opciones adaptadas a familias, parejas y grupos.</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Reserva ahora
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Estacionamiento
										</p>
										<p className='montserrat-300 text-principal text-[16px] flex items-center gap-2 mt-4'>
											<img src={Check} alt="" className='w-[14px]' />
											Desayuno
										</p>
									</div>
								</div>
							</div>
						</animated.div>
					</div>
				</section>

				<section className='w-full bg-cover bg-center relative pb-[40px] md:pb-[100px]' style={{ backgroundImage: `url(${BannerMap})` }}>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-[40px] md:pt-[150px]">
						<div className='w-full max-w-[900px] text-center mx-auto mb-16'>
							<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
								<p className='font-ruina text-[36px] text-white mb-2'>Ubicación</p>
								<p className='montserrat-300 text-white text-[24px] md:text-[52px] leading-[30px] md:leading-[65px] -tracking-[1px]'>
									Nuestro hospedaje se encuentra dentro del <span className='montserrat-800'>Bioparque</span>
								</p>
								<p className='montserrat-300 text-white text-[19px] mt-6 mb-10 w-full max-w-[500px] mx-auto'>
									Rodeados de naturaleza y a pocos pasos de las principales atracciones
								</p>
								<Link to="/contacto" className='button button--primary plus-jakarta-sans-600 uppercase' style={{ paddingBottom: 11 }}>Ver indicaciones</Link>
							</animated.div>
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

export default Housing