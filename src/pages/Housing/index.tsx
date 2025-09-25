
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Layout from '../../components/Layout';

import BannerHospedaje from '../../assets/img/banner-hospedaje.png';
import Ave from '../../assets/img/ave.svg';
import ButtonArrow from '../../assets/img/arrow-small.svg';
import BannerMap from '../../assets/img/map-dark.png';
import MapEffect from '../../assets/img/map-effect-2.png';
import MapEffect2 from '../../assets/img/map-effect-3.png';
import Habitacion1 from '../../assets/img/habitacion-1.png';
import Habitacion2 from '../../assets/img/habitacion-2.png';
import Habitacion3 from '../../assets/img/habitacion-3.png';
import Check from '../../assets/img/check.svg';

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
	const items = React.Children.toArray(children)
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		delay: 200,
		opacity: open ? 1 : 0,
		x: open ? 0 : -20,
		height: open ? 110 : 80,
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

	return (
		<Layout>
			<div>
				<section className="w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerHospedaje})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20">
							<Trail open={title}>
								<span className="text-[100px] text-secundario mb-8 leading-[110px] uppercase font-ruina title-shadow">Hospedate</span>
								<span className="text-[100px] text-secundario mb-8 leading-[110px] uppercase font-ruina title-shadow">En Bioparque</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[49px] montserrat-300 wfull max-w-[850px] leading-[50px]">
									Haz de tu visita al Bioparque una experiencia
									completa quedándote en nuestras áreas de hospedaje.
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[1600px] right-0 z-10 cocodrile-animate' style={{ top: topWolf + 'px' }}>
							<img src={Ave} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							cabañas y eco-lodges.
						</h2>
						<p className='w-full max-w-[1100px] text-center mx-auto montserrat-300 text-principal text-[40px] leading-[50px] -tracking-[1px]'>
							Vive la naturaleza de día y de noche en
							espacios diseñados para tu comodidad.
						</p>
						<p className='text-[30px] text-principal my-20 uppercase text-center font-ruina tracking-[6px]'>Tipos de habitación</p>
					</div>
				</section>

				<section className='w-full pb-10 mb-10'>
					<div className="w-full max-w-[1300px] mx-auto">
						<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
							<div className='w-full flex gap-4 justify-between'>
								<div className='w-full max-w-[424px]'>
									<div className='w-full h-[476px] bg-cover bg-center' style={{ backgroundImage: `url(${Habitacion1})` }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[40px] text-center'>Eco-lodges familiares</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[50px] my-2'>$950 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
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
								<div className='w-full max-w-[424px]'>
									<div className='w-full h-[476px] bg-cover bg-center' style={{ backgroundImage: `url(${Habitacion2})` }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[40px] text-center'>Cabañas privadas</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[50px] my-2'>$850 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
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
								<div className='w-full max-w-[424px]'>
									<div className='w-full h-[476px] bg-cover bg-center' style={{ backgroundImage: `url(${Habitacion3})` }}></div>
									<div className='w-full max-w-[340px] mx-auto'>
										<p className='montserrat-300 text-principal text-[40px] text-center'>Área de camping</p>
										<Link to="/contacto" className='button button--secondary button--full font-ruina relative flex justify-between items-center button--arrow'>
											Ver galería
											<img src={ButtonArrow} alt="" className='w-[8px] ml-4 -mt-[4px]' />
										</Link>
										<p className='plus-jakarta-sans-300 text-principal text-[21px] my-2'>Hospedajes desde</p>
										<p className='plus-jakarta-sans-600 text-principal text-[50px] my-2'>$650 <span className='plus-jakarta-sans-300 text-[#959191] text-[16px]'>/ POR NOCHE</span></p>
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

				<section className='w-full bg-cover bg-center relative pb-[100px] bg-footer' style={{ backgroundImage: `url(${BannerMap})` }}>
					<img src={MapEffect} alt="" className='w-full absolute -top-[5px] left-0' />
					<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-[150px]">
						<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
							<div className='w-full max-w-[900px] text-center mx-auto mb-16'>
								<p className='font-ruina text-[36px] text-white mb-2'>Ubicación</p>
								<p className='montserrat-300 text-white text-[52px] leading-[65px] -tracking-[1px]'>
									Nuestro hospedaje se encuentra dentro del <span className='montserrat-800'>Bioparque</span>
								</p>
								<p className='montserrat-300 text-white text-[19px] mt-6 mb-10 w-full'>
									Rodeados de naturaleza y a pocos pasos de las principales atracciones
								</p>
								<Link to="/contacto" className='button button--primary plus-jakarta-sans-600 uppercase' style={{ paddingBottom: 11 }}>Ver indicaciones</Link>
							</div>
						</animated.div>
					</div>
					<img src={MapEffect2} alt="" className='w-full absolute -bottom-[20px] left-0' />
				</section>
			</div>
		</Layout>
	)
}

export default Housing