
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { useTrail, a } from '@react-spring/web'
import './home.css';
import Layout from '../../components/Layout';

import BannerHome from '../../assets/img/banner-home.png';
import Wolf from '../../assets/img/wolf.svg';
import Card1 from '../../assets/img/card-animal-1.png';
import Card2 from '../../assets/img/card-animal-2.png';
import Card3 from '../../assets/img/card-animal-3.png';
import Card4 from '../../assets/img/card-1.png';
import GrayEffect from '../../assets/img/effect-gray.png';
import Ave1 from '../../assets/img/animal-1.png';
import Ave2 from '../../assets/img/animal-2.png';
import BannerRed from '../../assets/img/banner-red.png';
import Card5 from '../../assets/img/card-2.png';
import Card6 from '../../assets/img/card-3.png';
import RedEffect from '../../assets/img/effect-red.png';
import BannerMap from '../../assets/img/map-small.png';
import MapEffect from '../../assets/img/map-effect.png';
import AnimalMap from '../../assets/img/animal-3.png';
import Arrow from '../../assets/img/arrow.svg';
import ButtonArrow from '../../assets/img/arrow-button.svg';

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

const Home = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-874);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);
	const [isVisibleBanner7, setIsVisibleBanner7] = useState(false);
	const [isVisibleBanner8, setIsVisibleBanner8] = useState(false);

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
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner7 = useSpring({
		opacity: isVisibleBanner7 ? 1 : 0,
		transform: isVisibleBanner7 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner8 = useSpring({
		opacity: isVisibleBanner8 ? 1 : 0,
		transform: isVisibleBanner8 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsVisibleBanner3(scrollPosition > (headerHeight + 1400));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 1600));
		setIsVisibleBanner6(scrollPosition > (headerHeight + 1700));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 3000));
		setIsVisibleBanner7(scrollPosition > (headerHeight + 2300));
		setIsVisibleBanner8(scrollPosition > (headerHeight + 3200));
		if (scrollPosition > 360 || isMobile) {
			setTopWolf(-694);
		} else {
			const parallaxSpeed = 0.5;
			const newTopWolf = -874 + (scrollPosition * parallaxSpeed);
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
				<section className="w-full h-[1200px] px-20 bg-cover bg-center relative pt-[380px]" style={{ backgroundImage: `url(${BannerHome})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20">
							<Trail open={title}>
								<span className="text-[100px] text-red mb-8 leading-[110px] uppercase font-ruina title-shadow">Se parte de la</span>
								<span className="text-[100px] text-red mb-8 leading-[110px] uppercase font-ruina title-shadow">exploración de</span>
								<span className="text-[100px] text-red mb-8 leading-[110px] uppercase font-ruina title-shadow">la vida salvaje.</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[49px] montserrat-300">
									¡Disfruta de nuestro parque en Mazatlán!
								</p>
								<div className='flex gap-4 mt-4'>
									<Link to="/contacto" className='button button--primary font-ruina relative flex justify-between items-center button--arrow'>
										Conoce más
										<img src={ButtonArrow} alt="" className='w-[18px] ml-4' />
									</Link>
									<Link to="/contacto" className='button button--secondary font-ruina'>Planea tu visita</Link>
								</div>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[1600px] right-0 z-10 wolf-animate' style={{ top: topWolf + 'px' }}>
							<img src={Wolf} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Experiencias y Áreas
						</h2>
						<h3 className="text-principal text-[40px] text-center font-ruina">
							Conoce a los habitantes más fascinantes del Bioparque Mazatlán.
						</h3>
						<div className='w-full flex justify-between gap-4 pt-10'>
							<div>
								<img src={Card1} alt="" className='h-[500px] object-cover' />
								<p className='text-principal plus-jakarta-sans-300 text-[36px] my-4'>Jirafas</p>
								<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
									Acércate a nuestras jirafas y
									descubre curiosidades de su vida.
								</p>
							</div>
							<div>
								<img src={Card2} alt="" className='h-[500px] object-cover' />
								<p className='text-principal plus-jakarta-sans-300 text-[36px] my-4'>Elefantes</p>
								<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
									Admira a los gigantes de la sabana.
								</p>
							</div>
							<div>
								<img src={Card3} alt="" className='h-[500px] object-cover' />
								<p className='text-principal plus-jakarta-sans-300 text-[36px] my-4'>Felinos</p>
								<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
									Símbolos de fuerza y majestuosidad en su hábitat
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full bg-grayLight relative mt-[400px] pt-[70px] pb-[150px]'>
					<div className='absolute w-[2200px] right-0 -top-[135px] z-10 ave-animate'>
						<img src={GrayEffect} className='w-full' alt="" />
					</div>
					<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="relative animated-element w-full z-10">
						<img src={Ave1} className='absolute w-[467px] right-1/3 z-10 -top-[370px]' alt="" />
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<div className='flex justify-between gap-4'>
							<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element">
								<div className='w-[560px]'>
									<p className='font-ruina text-[36px] text-principal mb-2'>Tours Guiados</p>
									<p className='montserrat-300 text-principal text-[40px] leading-[42px]'>Acompañado de <br></br>guías expertos,</p>
									<h4 className='montserrat-800 text-principal text-[40px] leading-[42px] uppercase mb-4'>Descubre cada rincón del Bioparque.</h4>
									<p className='montserrat-600 text-principal text-[22px]'>
										Aprende sobre las especies, su importancia
										y disfruta de una experiencia educativa y
										divertida.
									</p>
								</div>
							</animated.div>
							<div className='relative'>
								<img src={Card4} alt="" className='h-[420px] object-cover relative z-20' />
								<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="relative animated-element w-full z-10">
									<img src={Ave2} className='absolute w-[312px] -right-[200px] z-10 -bottom-[120px]' alt="" />
								</animated.div>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full bg-cover bg-center relative pb-[100px]' style={{ backgroundImage: `url(${BannerRed})` }}>
					<img src={RedEffect} className='absolute -top-[20px] left-0 w-full' alt="" />
					<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element">
						<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-20">
							<div className='w-full max-w-[900px] text-center mx-auto mb-16'>
								<p className='font-ruina text-[36px] text-white mb-2'>Blog</p>
								<p className='montserrat-300 text-white text-[52px] leading-[50px] -tracking-[1px]'>
									conservación, educación ambiental
									y novedades <span className='montserrat-800 uppercase'>del Bioparque</span>
								</p>
							</div>
							<div className='flex justify-between gap-4 '>
								<div className='bg-cover bg-center w-[628px] h-[400px] text-white flex p-6 items-end relative' style={{ backgroundImage: `url(${Card5})` }}>
									<div className='w-full max-w-[440px]'>
										<p className='plus-jakarta-sans-300 text-[38px]'>Sobre Los Osos</p>
										<p className='plus-jakarta-sans-300 text-[16px]'>
											Lorem Ipsum is simply dummy text of the
											printing and typesetting industry.
										</p>
									</div>
									<div className='item-arrow absolute bottom-6 right-6 w-[50px] h-[50px] rounded-full border border-white cursor-pointer hover:bg-red flex justify-center items-center'>
										<img src={Arrow} alt="" />
									</div>
								</div>
								<div className='bg-cover bg-center w-[628px] h-[400px] text-white flex p-6 items-end relative' style={{ backgroundImage: `url(${Card6})` }}>
									<div className='w-full max-w-[440px]'>
										<p className='plus-jakarta-sans-300 text-[38px]'>Sobre Los Elefantes</p>
										<p className='plus-jakarta-sans-300 text-[16px]'>
											Lorem Ipsum is simply dummy text of the
											printing and typesetting industry.
										</p>
									</div>
									<div className='item-arrow absolute bottom-6 right-6 w-[50px] h-[50px] rounded-full border border-white cursor-pointer hover:bg-red flex justify-center items-center'>
										<img src={Arrow} alt="" />
									</div>
								</div>
							</div>
						</div>
					</animated.div>
				</section>

				<section className='w-full bg-cover bg-center relative pb-[100px]' style={{ backgroundImage: `url(${BannerMap})` }}>
					<img src={MapEffect} className='absolute -top-[10px] left-0 w-full' alt="" />
					<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="relative animated-element w-full z-10">
						<img src={AnimalMap} className='absolute w-[262px] right-[250px] z-10 top-0' alt="" />
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-[150px]">
						<div className='w-full max-w-[900px] text-center mx-auto mb-16'>
							<animated.div style={!isMobile ? animationPropsBanner8 : {}} className="animated-element">
								<p className='font-ruina text-[36px] text-white mb-2'>Mapa</p>
								<p className='montserrat-300 text-white text-[52px] leading-[65px] -tracking-[1px]'>
									Planea tu recorrido con nuestro <span className='montserrat-800 uppercase'>mapa descargable.</span>
								</p>
								<p className='montserrat-300 text-white text-[19px] mt-6 mb-10 w-full max-w-[500px] mx-auto'>
									Encuentra todas las áreas, servicios y actividades
									para que disfrutes tu visita sin perderte nada.
								</p>
								<Link to="/contacto" className='button button--primary plus-jakarta-sans-600 uppercase' style={{ paddingBottom: 11 }}>Descargar mapa en PDF</Link>
							</animated.div>
						</div>
					</div>
				</section>

			</div>
		</Layout>
	)
}

export default Home