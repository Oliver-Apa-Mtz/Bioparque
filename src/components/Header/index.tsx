import './header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

const Header = () => {
	const location = useLocation();
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [menuMovil, setMenuMovil] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setMenuMovil(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header w-screen fixed top-0 left-0 z-30 ${isHeaderFixed ? 'bg-white pt-[20px] pb-[10px] header-fixed' : 'pt-[30px]'} ${menuMovil ? 'header--active' : ''}`}>
			<div className="max-w-[1360px] mx-auto px-[20px] flex justify-between h-full">
				<div>
					<Link to="/">
						<img className={`h-[175px] ${isHeaderFixed ? 'h-[50px] invert' : ''}`} src={Logo} alt="Logo BioParc - El Encanto" loading="lazy" />
					</Link>
				</div>
				<nav className={`hidden lg:flex gap-4 xl:gap-6 text-sm text-text ${isHeaderFixed ? 'text-black' : 'text-white'}`}>
					<Link to="/" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red ${location.pathname === '/' ? 'plus-jakarta-sans-600' : ''}`}>Home</Link>
					<Link to="/bioparque" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red   ${location.pathname === '/bioparque' ? 'plus-jakarta-sans-600' : ''}`}>El bioparque</Link>
					<Link to="/experiencias-areas" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/experiencias-areas' ? 'plus-jakarta-sans-600' : ''}`}>Experiencias y áreas</Link>
					<Link to="/tu-visita" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/tu-visita' ? 'plus-jakarta-sans-600' : ''}`}>Tu visita</Link>
					<Link to="/blog" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/blog' ? 'plus-jakarta-sans-600' : ''}`}>Blog</Link>
					<Link to="/contacto" className={`header__nav__item plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/contacto' ? 'plus-jakarta-sans-600' : ''}`}>Contacto</Link>
					<Link to="/contacto" className={`button ${isHeaderFixed ? 'button--secondary' : 'button--primary'} button--small plus-jakarta-sans-600 uppercase`}>Compra entradas</Link>
					<Link to="/contacto" className={`button ${isHeaderFixed ? 'button--secondary' : 'button--primary'} button--small plus-jakarta-sans-600 uppercase`}>Reserva cabaña</Link>
				</nav>
				<button className="lg:hidden">
				</button>
				{menuMovil && (
					<div className='header__nav__movil bg-white' onClick={() => setMenuMovil(false)}>
						<Link to="/nosotros" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black">Nosotros</Link>
						<Link to="/productos-servicios" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black ">Productos y servicios</Link>
						<Link to="/industrias" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black">Industrias</Link>
						<Link to="/socios" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black">Socios</Link>
						<Link to="/como-trabajamos" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black">¿Cómo Trabajamos?</Link>
						<Link to="/contacto" className="header__nav__item__movil text-left w-full block p-2 text-sm plus-jakarta-sans-600 border-b border-secundario hover:bg-secundario hover:text-black">Contáctanos</Link>
					</div>
				)}
			</div>
		</header >
	)
}

export default Header