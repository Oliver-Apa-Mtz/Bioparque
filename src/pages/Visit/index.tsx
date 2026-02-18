
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Layout from '../../components/Layout';

import BannerVisita from '../../assets/img/banner-visita.webp';
import Ave from '../../assets/img/flamenco.svg';
import BannerMap from '../../assets/img/map-2.webp';
import MapEffect from '../../assets/img/map-effect-4.png';
import Visita1 from '../../assets/img/visita-1.webp';
import Icon1 from '../../assets/img/icon-7.svg';
import Icon2 from '../../assets/img/icon-8.svg';
import Icon3 from '../../assets/img/icon-9.svg';
import Icon4 from '../../assets/img/icon-10.svg';
import Icon5 from '../../assets/img/icon-11.svg';
import Icon6 from '../../assets/img/icon-12.svg';
import Animal from '../../assets/img/animal-7.webp';
import GrayEffect from '../../assets/img/effect-gray.png';
import BrownEffect from '../../assets/img/Brown-effect.png';
import Visita2 from '../../assets/img/promocion-1.webp';
import Visita3 from '../../assets/img/promocion-2.webp';
import Visita4 from '../../assets/img/promocion-3.webp';
import ButtonArrowSmall from '../../assets/img/arrow-small.svg';

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

const Visit = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-988);
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
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(-50px)',
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
		setIsVisibleBanner3(scrollPosition > (headerHeight + 1600));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 1700));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 3000));
		setIsVisibleBanner6(scrollPosition > (headerHeight + 3700));
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
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerVisita})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Tu visita</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[24px] md:text-[35px] xl:text-[49px] montserrat-300 wfull max-w-[850px] leading-[26px] md:leading-[50px] mt-[30px] md:mt-[0px]">
									Planifica tu visita al Bioparque
									Cómo llegar, tarifas y promociones
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[800px] md:w-[1300px] lg:w-[1600px] right-0 z-10 flamenco-animate' style={{ top: topWolf + 'px' }}>
							<img src={Ave} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-0 md:pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Ubicación
						</h2>
						<p className='w-full max-w-[750px] text-center mx-auto montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] leading-[28px] md:leading-[40px] xl:leading-[50px] -tracking-[1px] mb-4'>
							El Bioparque Mazatlán está ubicado a
							32 km del centro de Mazatlán.
						</p>
						<p className='plus-jakarta-sans-300 text-principal text-[20px] text-center'>
							Accede fácilmente en auto, transporte público o desde el aeropuerto.
						</p>
						<p className='plus-jakarta-sans-300 text-principal text-[20px] text-center'>
							Consulta nuestra ubicación en Google Maps y planifica tu ruta con un solo clic.
						</p>
					</div>
				</section>

				<section className='w-full bg-cover bg-center relative pb-[100px] bg-footer h-[200px] md:h-[300px] xl:h-[580px]' style={{ backgroundImage: `url(${BannerMap})` }}>
					<img src={MapEffect} alt="" className='w-full absolute -top-[5px] left-0' />
					<img src={MapEffect} alt="" className='w-full absolute -bottom-[5px] left-0 rotate-180' />
				</section>

				<section className="w-full mb-10">
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-10">
						<div className='w-full max-w-[340px] mx-auto mb-14'>
							<Link to="/contacto" className='button button--secondary font-ruina relative flex justify-between items-center button--arrow' style={{ margin: '0 auto' }}>
								Abrir en Google Maps
								<img src={ButtonArrowSmall} alt="" className='w-[8px] ml-4' />
							</Link>
						</div>
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Cómo llegar
						</h2>
						<p className='w-full max-w-[750px] text-center mx-auto montserrat-300 text-principal text-[24px] md:text-[35px] xl:text-[40px] leading-[28px] md:leading-[40px] xl:leading-[50px] -tracking-[1px] mb-4'>
							Puedes llegar a Bioparc El encanto en
							diferentes medios de transporte
						</p>
						<p className='plus-jakarta-sans-300 text-principal text-[20px] text-center'>
							Al llegar al Bioparque sigue la señalización principal.
						</p>
						<p className='plus-jakarta-sans-300 text-principal text-[20px] text-center'>
							Nuestro personal estará disponible para orientarte y garantizar una experiencia segura y organizada desde la entrada.
						</p>
						<div className='block lg:flex gap-6 mt-20 justify-between'>
							<div className='w-full lg:w-[40%] max-w-[500px] lg:max-w-auto mx-auto lg:mx-0 mb-10 lg:mb-0'>
								<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element w-full relative">
									<img src={Visita1} alt="" className='w-full' />
								</animated.div>
							</div>
							<div className='w-full lg:w-[60%] max-w-[700px] lg:max-w-auto mx-auto lg:mx-0'>
								<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element w-full relative flex justify-between items-center gap-y-4 flex-wrap">
									<div className='bg-grayLight p-4 xl:p-6 w-full sm:w-[49%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 h-[150px] xl:h-[176px]'>
										<div className='flex mb-4'>
											<div className='w-[56px] h-[56px] p-2 bg-[#E3EAE1] flex items-center justify-center mr-6'>
												<img src={Icon1} alt="" />
											</div>
											<p className='plus-jakarta-sans-300 text-principal text-[28px]'>Avión:</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[16px]'>
											Vuelos directos desde CDMX, Guadalajara y Monterrey.
										</p>
									</div>
									<div className='bg-grayLight p-4 xl:p-6 w-full sm:w-[49%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 h-[150px] xl:h-[176px]'>
										<div className='flex mb-4'>
											<div className='w-[56px] h-[56px] bg-[#E3EAE1] flex items-center justify-center mr-6'>
												<img src={Icon2} alt="" />
											</div>
											<p className='plus-jakarta-sans-300 text-principal text-[28px]'>Carretera:</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[16px]'>
											Accesos desde Culiacán, Tepic y Durango.
										</p>
									</div>
									<div className='bg-grayLight p-4 xl:p-6 w-full sm:w-[49%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 h-[150px] xl:h-[176px]'>
										<div className='flex mb-4'>
											<div className='w-[56px] h-[56px] bg-[#E3EAE1] flex items-center justify-center mr-6'>
												<img src={Icon3} alt="" />
											</div>
											<p className='plus-jakarta-sans-300 text-principal text-[28px]'>Barco:</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[16px]'>
											opción para visitantes en crucero.
										</p>
									</div>
									<div className='bg-grayLight p-4 xl:p-6 w-full sm:w-[49%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 h-[150px] xl:h-[176px]'>
										<div className='flex mb-4'>
											<div className='w-[56px] h-[56px] bg-[#E3EAE1] flex items-center justify-center mr-6'>
												<img src={Icon4} alt="" />
											</div>
											<p className='plus-jakarta-sans-300 text-principal text-[28px]'>*Tren:</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[16px]'>
											Conexión turística en desarrollo.
											*próximamente
										</p>
									</div>
								</animated.div>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full bg-grayLight relative mt-[100px] xl:mt-[200px] pt-[0px] lg:pt-[70px] pb-[50px]'>
					<div className='absolute w-[2200px] right-0 -top-[35px] lg:-top-[135px] z-10 ave-animate'>
						<img src={GrayEffect} className='w-full' alt="" />
					</div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20 min-h-[900px]">
						<div className='block lg:flex justify-between gap-4'>
							<div className='w-full max-w-[648px] mx-auto lg:mx-0 mb-20 lg:mb-0 text-center'>
								<div className='bg-brown relative mb-20'>
									<img src={BrownEffect} alt="" className='w-full h-[37px] absolute -top-[36px] left-0' />
									<p className='font-ruina text-[24px] md:text-[36px] text-white h-[50px] md:h-[83px] flex items-center justify-center'>Estacionamiento</p>
									<img src={BrownEffect} alt="" className='w-full h-[37px] absolute -bottom-[36px] left-0 rotate-180' />
								</div>
								<img src={Icon5} alt="" className='mx-auto mb-4' />
								<p className='montserrat-300 text-[24px] md:text-[33px] leading-[26px] md:leading-[42px] text-principal'>
									Contamos con un amplio estacionamiento con
									espacios para autos, camionetas y autobuses
									turísticos. Seguridad y vigilancia durante
									todo el día incluidos en tu visita.
								</p>
							</div>
							<div className='w-full max-w-[648px] mx-auto lg:mx-0 text-center'>
								<div className='bg-brown relative mb-20'>
									<img src={BrownEffect} alt="" className='w-full h-[37px] absolute -top-[36px] left-0' />
									<p className='font-ruina text-[24px] md:text-[36px] text-white h-[50px] md:h-[83px] flex items-center justify-center'>Entradas y tarifas</p>
									<img src={BrownEffect} alt="" className='w-full h-[37px] absolute -bottom-[36px] left-0 rotate-180' />
								</div>
								<img src={Icon6} alt="" className='mx-auto mb-4' />
								<p className='montserrat-300 text-[24px] md:text-[33px] leading-[26px] md:leading-[42px] text-principal mb-4'>
									Compra tus boletos en línea de manera rápida
									y segura. Evita filas y asegúrate de tu entrada.
								</p>
								<div className='w-full max-w-[340px] mx-auto mt-8'>
									<Link to="/contacto" className='button button--secondary font-ruina relative flex justify-between items-center button--arrow' style={{ margin: '0 auto' }}>
										Compra boletos ahora
										<img src={ButtonArrowSmall} alt="" className='w-[8px] ml-4' />
									</Link>
								</div>
							</div>
						</div>
						<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element relative lg:absolute lg:-bottom-[50px] lg:left-[35%]">
							<img src={Animal} alt="" className='w-[333px] mx-auto lg:mx-0 mt-10 lg:mt-0' />
						</animated.div>
					</div>
					<div className='absolute w-[2200px] right-0 -bottom-[142px] z-10 ave-animate'>
						<img src={GrayEffect} className='w-full rotate-180' alt="" />
					</div>
				</section>

				<section className="w-full pb-6 mt-[100px] lg:mt-[150px] relative">
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-20 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Promociones
						</h2>
						<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element">
							<div className='flex justify-center lg:justify-between gap-6 flex-wrap lg:flex-nowrap'>
								<div className='w-full sm:w-[48%] lg:w-[32%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 mb-10 lg:mb-0'>
									<img src={Visita2} alt="" className='w-full' />
									<div className='bg-[#E3EAE1] p-6'>
										<div className='rounded-full border mb-8 border-[#527752] px-6 py-1 max-w-max'>
											<p className='plus-jakarta-sans-600 text-[#527752] text-[12px] uppercase tracking-[1px]'>
												Miércoles escolares
											</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[20px] mb-10 leading-[110%]'>
											Descuentos especiales para grupos educativos.
										</p>
										<p className='plus-jakarta-sans-600 text-principal text-[12px] tracking-[2px] uppercase'>
											SEPTIEMBRE 15, 2025
										</p>
									</div>
								</div>
								<div className='w-full sm:w-[48%] lg:w-[32%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 mb-10 lg:mb-0'>
									<img src={Visita3} alt="" className='w-full' />
									<div className='bg-[#E3EAE1] p-6'>
										<div className='rounded-full border mb-8 border-[#527752] px-6 py-1 max-w-max'>
											<p className='plus-jakarta-sans-600 text-[#527752] text-[12px] uppercase tracking-[1px]'>
												Membresía anual
											</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[20px] mb-10 leading-[110%]'>
											Acceso ilimitado y beneficios exclusivos todo el año.
										</p>
										<p className='plus-jakarta-sans-600 text-principal text-[12px] tracking-[2px] uppercase'>
											SEPTIEMBRE 15, 2025
										</p>
									</div>
								</div>
								<div className='w-full sm:w-[48%] lg:w-[32%] max-w-[400px] lg:max-w-auto mx-auto lg:mx-0 mb-10 lg:mb-0'>
									<img src={Visita4} alt="" className='w-full' />
									<div className='bg-[#E3EAE1] p-6'>
										<div className='rounded-full border mb-8 border-[#527752] px-6 py-1 max-w-max'>
											<p className='plus-jakarta-sans-600 text-[#527752] text-[12px] uppercase tracking-[1px]'>
												Paquetes familiares
											</p>
										</div>
										<p className='plus-jakarta-sans-300 text-principal text-[20px] mb-10 leading-[110%]'>
											Ahorra combinando boletos + alimentos + experiencias.
										</p>
										<p className='plus-jakarta-sans-600 text-principal text-[12px] tracking-[2px] uppercase'>
											SEPTIEMBRE 15, 2025
										</p>
									</div>
								</div>
							</div>
						</animated.div>
						<div className='mt-8 sm:mt-14 mb-20'>
							<Link to="/contacto" className='button button--secondary font-ruina relative flex justify-between items-center button--arrow' style={{ margin: '0 auto' }}>
								Ver más
								<img src={ButtonArrowSmall} alt="" className='w-[8px] ml-4' />
							</Link>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default Visit