
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTrail, a } from '@react-spring/web'
import '../Home/home.css';
import Layout from '../../components/Layout';
import Accordion from '../../components/Accordion';

import BannerFaq from '../../assets/img/banner-faq.webp';
import Giraffe from '../../assets/img/giraffe.svg';
import MapEffect2 from '../../assets/img/map-effect-3.png';

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

const items = [
	{
		title: "¿Dónde está ubicado el Bioparque Mazatlán?",
		content: "Sigue los caminos marcados y respeta las señalizaciones.",
	},
	{
		title: "¿Cuánto cuesta la entrada al Bioparque?",
		content: "No alimentes ni molestes a los animales dentro del bioparque.",
	},
	{
		title: "¿Qué animales puedo ver en el Bioparque?",
		content: "Evita ingresar con objetos punzocortantes o peligrosos.",
	},
	{
		title: "¿Se pueden comprar boletos en línea?",
		content: "Se permite ingresar con agua; consulta las reglas sobre alimentos.",
	},
	{
		title: "¿Cuentan con estacionamiento?",
		content: "Mantén un comportamiento adecuado y cuida el entorno.",
	},
];

const Faq = () => {
	const [title, setTitle] = useState(false);
	const [topWolf, setTopWolf] = useState(-891);
	const isMobile = window.innerWidth <= 1023;
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
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
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px]" style={{ backgroundImage: `url(${BannerFaq})` }} role="banner">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Preguntas</span>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Frecuentes</span>
							</Trail>
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<p className="w-full md:w-[500px] lg:w-full text-white text-[24px] md:text-[35px] xl:text-[49px] montserrat-300 mt-[30px] md:mt-[0px]">
									Todo lo que necesitas saber
								</p>
							</animated.div>
						</div>
					</div>
				</section>

				<section className="w-full mb-20 relative">
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="relative animated-element w-full">
						<div className='absolute w-[800px] md:w-[1300px] lg:w-[1600px] right-0 z-10 giraffe-animate' style={{ top: topWolf + 'px' }}>
							<img src={Giraffe} alt="" className='w-full' />
						</div>
					</animated.div>
					<div className="w-full max-w-[1360px] mx-auto relative z-20 pt-0 sm:pt-10 lg:pt-20">
						<h2 className="text-[36px] text-principal mb-20 uppercase text-center font-ruina title-line relative tracking-[6px]">
							Faq
						</h2>
						<div>
							<Accordion items={items} />
						</div>
					</div>
					<img src={MapEffect2} alt="" className='w-full absolute -bottom-[82px] left-0' />
				</section>

			</div>
		</Layout>
	)
}

export default Faq