
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { useTrail, a } from '@react-spring/web'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

import Slider from 'react-slick';
import Layout from '../../components/Layout';
import BannerHome from '../../assets/img/banner-home.webp';
import Wolf from '../../assets/img/elephant.svg';
import Card1 from '../../assets/img/card-animal-1.webp';
import Card2 from '../../assets/img/card-animal-2.webp';
import Card3 from '../../assets/img/card-animal-3.webp';
import Card4 from '../../assets/img/card-1.webp';
import WaveEffect from '../../assets/img/wave-effect.svg';
import Ave1 from '../../assets/img/animal-1.webp';
import Ave2 from '../../assets/img/animal-2.webp';
import WaveBlue from '../../assets/img/wave-blue.webp';
import Card5 from '../../assets/img/card-2.webp';
import Card6 from '../../assets/img/card-3.webp';
import BannerMap from '../../assets/img/map-dark.webp';
import AnimalMap from '../../assets/img/animal-3.webp';
import Arrow from '../../assets/img/arrow.svg';
import ButtonArrow from '../../assets/img/arrow-button.svg';

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 10000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
};

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

const Home = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-800);
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
		if (!isMobile) {
			if (scrollPosition > 310 || isMobile) {
				setTopWolf(-645);
			} else {
				const parallaxSpeed = 0.5;
				const newTopWolf = -800 + (scrollPosition * parallaxSpeed);
				setTopWolf(newTopWolf);
			}
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
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[380px]" style={{ backgroundImage: `url(${BannerHome})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Se parte de la</span>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">exploración de</span>
								<span className="text-[129px] text-white mb-19 leading-[130px] uppercase font-ruina title-shadow">la vida salvaje.</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="w-full md:w-[500px] lg:w-full text-white text-[24px] md:text-[35px] xl:text-[49px] montserrat-300 mt-[30px] md:mt-[0px]">
									¡Disfruta de nuestro parque en Mazatlán!
								</p>
								<div className='flex gap-4 mt-4 justify-center md:justify-start flex-wrap sm:flex-nowrap'>
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
						<div className='absolute w-[700px] right-0 z-10 wolf-animate' style={{ top: topWolf + 'px' }}>
							<img src={Wolf} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1740px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Experiencias y Áreas
						</h2>
						<h3 className="text-principal text-[24px] md:text-[35px] xl:text-[40px] text-center montserrat-300">
							Conoce a los habitantes más fascinantes del Bioparc El Encanto
						</h3>
						<div className='w-full pt-10 carrousel-container'>
							<Slider {...settings}>
								<div className='px-2'>
									<img src={Card1} alt="" className='w-full h-[300px] lg:h-[400px] 2xl:h-[500px] object-cover' />
									<p className='text-principal plus-jakarta-sans-600 text-[36px] my-4'>Jirafas</p>
									<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
										Acércate a nuestras jirafas y
										descubre curiosidades de su vida.
									</p>
								</div>
								<div className='px-2'>
									<img src={Card2} alt="" className='w-full h-[300px] lg:h-[400px] 2xl:h-[500px] object-cover' />
									<p className='text-principal plus-jakarta-sans-600 text-[36px] my-4'>Elefantes</p>
									<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
										Admira a los gigantes de la sabana en un hábitat seguro y educativo.
									</p>
								</div>
								<div className='px-2'>
									<img src={Card3} alt="" className='w-full h-[300px] lg:h-[400px] 2xl:h-[500px] object-cover' />
									<p className='text-principal plus-jakarta-sans-600 text-[36px] my-4'>Felinos</p>
									<p className='text-principal plus-jakarta-sans-400 text-[20px] leading-[25px]'>
										Símbolos de fuerza y majestuosidad en su hábitat
									</p>
								</div>
							</Slider>
						</div>
					</div>
					<div className='absolute w-full right-0 top-[500px] z-10'>
						<img src={WaveEffect} className='w-full' alt="" />
					</div>
				</section>

				<section className='w-full relative mt-0 md:mt-[400px] pt-[70px] pb-[0px] xl:pb-[150px]'>
					<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="relative animated-element w-full z-10">
						<img src={Ave1} className='relative md:absolute mx-auto md:mx-0 w-[280px] sm:w-[400px] md:w-[467px] right-0 md:right-1/3 z-10 top-0 md:-top-[370px]' alt="" />
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<div className='block xl:flex justify-center 2xl:justify-between gap-4'>
							<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element">
								<div className='w-full md:w-[560px] mx-auto xl:mx-0'>
									<p className='font-ruina text-[36px] text-principal mb-2 text-center xl:text-left'>Tours Guiados</p>
									<p className='montserrat-300 text-principal text-[24px] md:text-[40px] leading-[42px] text-center xl:text-left uppercase mb-4'>Acompañado de <br></br>guías expertos,</p>
									<h4 className='montserrat-800 text-principal text-[24px] md:text-[40px] leading-[42px] uppercase mb-4 text-center xl:text-left'>Descubre cada rincón del Bioparque.</h4>
									<p className='montserrat-600 text-principal text-[22px] text-center xl:text-left'>
										Aprende sobre las especies, su importancia
										y disfruta de una experiencia educativa y
										divertida.
									</p>
									<ul className='montserrat-600 text-principal text-[22px] ml-4 pt-6 list-disc list-inside'>
										<li>Safari familiar</li>
										<li>Tours educativos para escuela</li>
									</ul>
								</div>
							</animated.div>
							<div className='relative w-full md:w-[560px] xl:w-auto mx-auto xl:mx-0 mt-20 xl:mt-0'>
								<img src={Card4} alt="" className='w-full xl:w-auto h-[360px] 2xl:h-[420px] object-cover relative z-20' />
								<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="relative animated-element w-full z-10">
									<img src={Ave2} className='hidden md:block absolute w-[312px] -right-[200px] z-10 -bottom-[120px]' alt="" />
								</animated.div>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full bg-cover bg-center relative pb-[70px]' style={{ backgroundImage: `url(${WaveBlue})` }}>
					<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element">
						<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-[100px] xl:pt-[50px]">
							<div className='w-full max-w-[900px] text-center mx-auto mb-20'>
								<p className='font-ruina text-[36px] text-black mb-2'>Blog</p>
								<p className='montserrat-300 text-black text-[24px] md:text-[52px] leading-[50px] -tracking-[1px]'>
									conservación, educación ambiental
									y novedades <span className='montserrat-800 uppercase'>del Bioparque</span>
								</p>
							</div>
							<div className='block md:flex justify-between gap-4 '>
								<div className='bg-cover bg-center w-full max-w-[628px] mx-auto md:mx-0 mb-10 md:mb-0 h-[400px] text-white flex p-6 items-end relative pb-[45px]' style={{ backgroundImage: `url(${Card5})` }}>
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
								<div className='bg-cover bg-center w-full max-w-[628px] mx-auto md:mx-0 h-[400px] text-white flex p-6 items-end relative pb-[45px]' style={{ backgroundImage: `url(${Card6})` }}>
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

				<section className='w-full bg-cover bg-center relative pb-[40px] md:pb-[100px]' style={{ backgroundImage: `url(${BannerMap})` }}>
					<div className='absolute inset-0 bg-black/40 z-0'></div>
					<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="relative animated-element w-full z-10">
						<img src={AnimalMap} className='hidden md:block absolute w-[262px] right-[250px] z-10 top-0' alt="" />
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-[40px] md:pt-[150px] relative z-10">
						<div className='w-full max-w-[900px] text-center mx-auto mb-16'>
							<animated.div style={!isMobile ? animationPropsBanner8 : {}} className="animated-element">
								<p className='font-ruina text-[36px] text-white mb-2'>Mapa</p>
								<p className='montserrat-300 text-white text-[24px] md:text-[52px] leading-[30px] md:leading-[65px] -tracking-[1px]'>
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