
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import '../Home/home.css';
import Layout from '../../components/Layout';
import CalendarCustom from '../../components/Calendar';

import BannerAbout from '../../assets/img/banner-about.png';
import BannerGreen from '../../assets/img/bg-lines.png';
import Lion from '../../assets/img/lion.svg';
import Animal1 from '../../assets/img/animal-4.png';
import Animal2 from '../../assets/img/animal-5.png';
import Animal3 from '../../assets/img/animal-6.png';
import GrayEffect from '../../assets/img/effect-gray.png';
import BrownEffect from '../../assets/img/Brown-effect.png';
import Icon1 from '../../assets/img/icon-1.svg';
import Icon2 from '../../assets/img/icon-2.svg';
import Icon3 from '../../assets/img/icon-3.svg';
import Icon4 from '../../assets/img/icon-4.svg';
import Icon5 from '../../assets/img/icon-5.svg';
import Icon6 from '../../assets/img/icon-6.svg';

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

const About = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-974);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);

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
		transform: isVisibleBanner4 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsVisibleBanner3(scrollPosition > (headerHeight + 800));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 700));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 1200));
		setIsVisibleBanner6(scrollPosition > (headerHeight + 2600));
		if (scrollPosition > 640 || isMobile) {
			setTopWolf(-654);
		} else {
			const parallaxSpeed = 0.5;
			const newTopWolf = -974 + (scrollPosition * parallaxSpeed);
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
				<section className="w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerAbout})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20">
							<Trail open={title}>
								<span className="text-[100px] text-secundario mb-8 leading-[110px] uppercase font-ruina title-shadow">Bioparque</span>
								<span className="text-[100px] text-secundario mb-8 leading-[110px] uppercase font-ruina title-shadow">Mazatlán</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[49px] montserrat-300 wfull max-w-[650px] leading-[48px]">
									Un espacio de conservación, diversión y aprendizaje en familia.
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[1600px] right-0 z-10 lion-animate' style={{ top: topWolf + 'px' }}>
							<img src={Lion} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Conoce más sobre nosotros
						</h2>
						<div className='w-full bg-green flex justify-end items-center pr-6 py-20 bg-cover bg-center mt-[200px] relative' style={{ backgroundImage: `url(${BannerGreen})` }}>
							<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element w-[728px] absolute -top-[110px] -left-[60px]">
								<img src={Animal1} alt="" />
							</animated.div>
							<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
								<div className='w-full max-w-[590px] text-white text-right'>
									<p className='font-ruina text-[36px] tracking-[6px] float-right border-b-[3px] border-red mb-8'>¿Qué es Bioparque?</p>
									<p className='montserrat-300 text-[40px] leading-[44px] my-8'>
										<span className='montserrat-800'>Bioparc Mazatlán</span> es un centro de conservación
										y recreación diseñado para acercar a las personas
										a la naturaleza.
									</p>
									<p className='montserrat-300 text-[16px] leading-[24px]'>
										Aquí podrás convivir con especies emblemáticas
										como elefantes, jirafas, tigres, cocodrilos y
										muchas más, en hábitats que promueven la educación
										y el respeto por la vida silvestre. Nuestro objetivo
										es que cada visita sea una experiencia divertida y,
										al mismo tiempo, una oportunidad de aprendizaje.
									</p>
								</div>
							</animated.div>
							<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element absolute -bottom-[320px] right-0">
								<img src={Animal2} alt="" className='w-[411px]' />
							</animated.div>
						</div>
					</div>
				</section>

				<section className='w-full bg-grayLight relative mt-[360px] pt-[70px] pb-[150px]'>
					<div className='absolute w-[2200px] right-0 -top-[135px] z-10 ave-animate'>
						<img src={GrayEffect} className='w-full' alt="" />
					</div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<div className='flex justify-between gap-4'>
							<div className='w-full max-w-[648px] text-center'>
								<div className='bg-brown relative mb-20'>
									<img src={BrownEffect} alt="" className='w-full absolute -top-[37px] left-0' />
									<p className='font-ruina text-[36px] text-white h-[83px] flex items-center justify-center'>Horarios</p>
									<img src={BrownEffect} alt="" className='w-full absolute -bottom-[37px] left-0 rotate-180' />
								</div>
								<img src={Icon1} alt="" className='mx-auto mb-4' />
								<p className='montserrat-300 text-[33px] leading-[42px] text-principal'>El <b className='montserrat-800'>Bioparque Mazatlán</b></p>
								<p className='montserrat-300 text-[33px] leading-[42px] text-principal'>abre todos los días</p>
								<p className='montserrat-300 text-[33px] leading-[42px] text-principal'>de <b className='montserrat-800'>9:00</b> a.m. a <b className='montserrat-800'>6:00</b> p.m.</p>
								<p className='montserrat-300 text-[33px] my-8 text-principal'>
									Durante días festivos y temporadas especiales
									extendemos nuestro horario para que disfrutes
									más de la experiencia.
								</p>
								<p className='montserrat-300 text-[16px] text-principal'>
									La última entrada al zoológico es 45 minutos
									antes del cierre del parque. Las exhibiciones
									de animales cierran 30 minutos antes del cierre
									del parque.
								</p>
							</div>
							<div className='w-full max-w-[648px] text-center'>
								<div className='bg-brown relative mb-20'>
									<img src={BrownEffect} alt="" className='w-full absolute -top-[37px] left-0' />
									<p className='font-ruina text-[36px] text-white h-[83px] leading-[42px]'>Recomendaciones <br></br>para la visita</p>
									<img src={BrownEffect} alt="" className='w-full absolute -bottom-[37px] left-0 rotate-180' />
								</div>
								<p className='montserrat-300 text-[33px] leading-[42px] text-principal'>
									Para que tu experiencia sea más cómoda y segura,
								</p>
								<p className='montserrat-300 text-[33px] leading-[42px] text-principal'>
									<b className='montserrat-800'>te recomendamos llevar:</b>
								</p>
								<div className='w-full max-w-[400px] mx-auto flex items-center my-6'>
									<img src={Icon2} alt="" />
									<p className='montserrat-300 text-[33px] leading-[42px] ml-8 text-principal'>Ropa ligera</p>
								</div>
								<div className='w-full max-w-[400px] mx-auto flex items-center my-6'>
									<img src={Icon3} alt="" />
									<p className='montserrat-300 text-[33px] leading-[42px] ml-8 text-principal'>Bloqueador solar</p>
								</div>
								<div className='w-full max-w-[400px] mx-auto flex items-center my-6'>
									<img src={Icon4} alt="" />
									<p className='montserrat-300 text-[33px] leading-[42px] ml-8 text-principal'>Sombrero o gorra</p>
								</div>
								<div className='w-full max-w-[400px] mx-auto flex items-center my-6'>
									<img src={Icon5} alt="" />
									<p className='montserrat-300 text-[33px] leading-[42px] ml-8 text-principal'>Calzado cómodo</p>
								</div>
								<div className='w-full max-w-[400px] mx-auto flex items-center my-6'>
									<img src={Icon6} alt="" />
									<p className='montserrat-300 text-[33px] leading-[42px] ml-8 text-principal'>Agua embotellada.</p>
								</div>
								<p className='montserrat-800 text-[16px] text-principal'>
									No está permitido ingresar con mascotas ni con alimentos del exterior
								</p>
							</div>
						</div>
						<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element absolute -bottom-[360px] left-[100px]">
							<img src={Animal3} alt="" className='w-[333px]' />
						</animated.div>
					</div>
					<div className='absolute w-[2200px] right-0 -bottom-[142px] z-10 ave-animate'>
						<img src={GrayEffect} className='w-full rotate-180' alt="" />
					</div>
				</section>

				<section className='w-full mt-[150px] mb-[100px]'>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="text-[36px] text-principal mb-8 uppercase text-center font-ruina relative tracking-[6px]">
							Calendario de temporadas y eventos
						</h2>
						<p className='montserrat-300 text-[40px] leading-[42px] text-center max-w-[800px] mx-auto mb-4 text-principal'>
							<b className='montserrat-800'>Consulta nuestro calendario</b> y planea
							tu visita en la mejor temporada.
						</p>
						<p className='montserrat-300 text-[16px] text-center max-w-[500px] mx-auto mb-20 text-principal'>
							Descubre eventos especiales, actividades educativas y
							promociones exclusivas para familias, escuelas y empresas
						</p>
					</div>

					<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-4">
						<CalendarCustom />
					</div>
				</section>

			</div >
		</Layout >
	)
}

export default About