
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Layout from '../../components/Layout';

import BannerExperiencies from '../../assets/img/banner-experiencies.png';
import Cocodrile from '../../assets/img/cocodrile.png';
import Image1 from '../../assets/img/experiencia-1.png';
import Image2 from '../../assets/img/experiencia-2.png';
import Image3 from '../../assets/img/experiencia-3.png';
import Image4 from '../../assets/img/experiencia-4.png';

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

const Experiencies = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-891);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);

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
			const newTopWolf = -891 + (scrollPosition * parallaxSpeed);
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
				<section className="w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerExperiencies})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20">
							<Trail open={title}>
								<span className="text-[100px] text-secundario mb-8 leading-[110px] uppercase font-ruina title-shadow">Experiencias</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="text-white text-[49px] montserrat-300 wfull max-w-[650px] leading-[48px]">
									La experiencia y la calidad son parte de nuestra esencia
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-10 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[1600px] right-0 z-10 cocodrile-animate' style={{ top: topWolf + 'px' }}>
							<img src={Cocodrile} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto px-[20px] relative z-20 pt-20">
						<h2 className="w-full max-w-[700px] mx-auto text-[36px] text-principal mb-8 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Vive experiencias únicas en
							el Bioparque Mazatlán.
						</h2>
						<p className='w-full max-w-[1100px] text-center mx-auto montserrat-300 text-principal text-[40px] leading-[50px] -tracking-[1px]'>
							Cada área está diseñada para que aprendas, te diviertas y
							te conectes con la naturaleza.
						</p>
					</div>
					<div className='w-full max-w-[1100px] mx-auto flex flex-wrap justify-center gap-4 mt-10 px-4'>
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

				<section className='w-full pb-10'>
					<div className="w-full max-w-[1300px] mx-auto">
						<div className='w-full border-b border-gray mb-10 py-10'>
							<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
								<div className='w-full flex gap-4 mb-4 h-[500px] justify-between'>
									<div className='basis-2/3'>
										<img src={Image1} alt="" className='h-full' />
									</div>
									<div className='basis-1/3'>
										<img src={Image2} alt="" className='h-full' />
									</div>
								</div>
							</animated.div>
							<div className='w-full flex gap-4'>
								<div className='basis-2/3'>
									<p className='text-principal plus-jakarta-sans-700 text-[38px] mb-4'>Elefantes</p>
									<p className='montserrat-300 text-principal text-[27px] leading-[28px]'>
										Admira a los gigantes de la sabana
										en un hábitat seguro y educativo.
									</p>
								</div>
								<div className='basis-1/3 flex justify-between pt-10'>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Zona</p>
										<p className='montserrat-300 text-principal text-[16px]'>A-32</p>
									</div>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Días</p>
										<p className='montserrat-300 text-principal text-[16px]'>Lunes a Domingo</p>
									</div>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Horario</p>
										<p className='montserrat-300 text-principal text-[16px]'>9.30 a.m. a 5:30 p.m.</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-end'>
							<Link to="/contacto" className='button button--secondary font-ruina'>Compre boletos en línea</Link>
						</div>

						<div className='w-full border-b border-gray mb-10 py-10'>
							<div className='w-full flex gap-4 mb-4 h-[500px] justify-between'>
								<div className='basis-2/3'>
									<img src={Image3} alt="" className='h-full' />
								</div>
								<div className='basis-1/3'>
									<img src={Image4} alt="" className='h-full' />
								</div>
							</div>
							<div className='w-full flex gap-4'>
								<div className='basis-2/3'>
									<p className='text-principal plus-jakarta-sans-700 text-[38px] mb-4'>Jirafas</p>
									<p className='montserrat-300 text-principal text-[27px] leading-[28px]'>
										Alimenta a las jirafas y conoce curiosidades sobre su vida.
									</p>
								</div>
								<div className='basis-1/3 flex justify-between pt-10'>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Zona</p>
										<p className='montserrat-300 text-principal text-[16px]'>A-32</p>
									</div>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Días</p>
										<p className='montserrat-300 text-principal text-[16px]'>Lunes a Domingo</p>
									</div>
									<div className='w-[100px]'>
										<p className='montserrat-300 text-gray text-[18px]'>Horario</p>
										<p className='montserrat-300 text-principal text-[16px]'>9.30 a.m. a 5:30 p.m.</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-end'>
							<Link to="/contacto" className='button button--secondary font-ruina'>Compre boletos en línea</Link>
						</div>

					</div>
				</section>

			</div>
		</Layout>
	)
}

export default Experiencies