import './header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import Menu from '../../assets/img/menu.png';

const Header = () => {
	const location = useLocation();
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [menuMovil, setMenuMovil] = useState(false);
	const [bioparqueDropdown, setBioparqueDropdown] = useState(false);
	const [experienciasDropdown, setExperienciasDropdown] = useState(false);

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
						<img className={`header-logo h-[175px] ${isHeaderFixed ? 'h-[50px] invert' : ''}`} src={Logo} alt="Logo BioParc - El Encanto" loading="lazy" />
					</Link>
				</div>
				{!menuMovil && (
					<nav className={`hidden lg:flex gap-4 xl:gap-6 text-sm text-text ${isHeaderFixed ? 'text-black' : 'text-white'}`}>
						<Link to="/" className={`header__nav__item h-max plus-jakarta-sans-300 uppercase pt-3 hover:text-red ${location.pathname === '/' ? 'plus-jakarta-sans-600' : ''}`}>Home</Link>
						<div className="relative group h-max mt-3">
							<div className={`header__nav__item plus-jakarta-sans-300 uppercase hover:text-red cursor-pointer ${location.pathname === '/bioparque' ? 'plus-jakarta-sans-600' : ''}`}>El bioparque</div>
							<div className="absolute -bottom-[130px] left-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<Link to="/bioparque" className="block px-4 py-2 text-sm text-principal hover:text-red">Bioparque</Link>
								<Link to="/reglamento" className="block px-4 py-2 text-sm text-principal hover:text-red">Reglamento</Link>
								<Link to="/faq" className="block px-4 py-2 text-sm text-principal hover:text-red">FAQ</Link>
							</div>
						</div>
						<div className="relative group h-max mt-3">
							<div className={`header__nav__item plus-jakarta-sans-300 uppercase hover:text-red cursor-pointer ${location.pathname === '/experiencias-areas' ? 'plus-jakarta-sans-600' : ''}`}>Experiencias y áreas</div>
							<div className="absolute -bottom-[130px] left-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<Link to="/areas" className="block px-4 py-2 text-sm text-principal hover:text-red">Áreas</Link>
								<Link to="/experiencias-areas" className="block px-4 py-2 text-sm text-principal hover:text-red">Experiencias</Link>
								<Link to="/hospedaje" className="block px-4 py-2 text-sm text-principal hover:text-red">Hospedaje</Link>
							</div>
						</div>
						<Link to="/tu-visita" className={`header__nav__item h-max plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/tu-visita' ? 'plus-jakarta-sans-600' : ''}`}>Tu visita</Link>
						<Link to="/blog" className={`header__nav__item h-max plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/blog' ? 'plus-jakarta-sans-600' : ''}`}>Blog</Link>
						<Link to="/contacto" className={`header__nav__item h-max plus-jakarta-sans-300 uppercase pt-3 hover:text-red  ${location.pathname === '/contacto' ? 'plus-jakarta-sans-600' : ''}`}>Contacto</Link>
						<Link to="/contacto" className={`button ${isHeaderFixed ? 'button--secondary' : 'button--primary'} button--small plus-jakarta-sans-600 uppercase`}>Compra entradas</Link>
						<Link to="/contacto" className={`button ${isHeaderFixed ? 'button--secondary' : 'button--primary'} button--small plus-jakarta-sans-600 uppercase`}>Reserva cabaña</Link>
					</nav>
				)}
				<button className="lg:hidden">
					<img src={Menu} alt="" className='w-[25px]' onClick={() => setMenuMovil(!menuMovil)} />
				</button>
				{menuMovil && (
					<div className='header__nav__movil bg-white absolute w-full top-[80px] left-0 border-t-[2px] border-green' onClick={() => setMenuMovil(false)}>
						<Link to="/" className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario">Home</Link>
						<div>
							<div
								className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									setBioparqueDropdown(!bioparqueDropdown);
								}}
							>
								El bioparque
							</div>
							{bioparqueDropdown && (
								<div className="bg-gray-50">
									<Link to="/bioparque" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">Bioparque</Link>
									<Link to="/reglamento" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">Reglamento</Link>
									<Link to="/faq" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">FAQ</Link>
								</div>
							)}
						</div>
						<div>
							<div
								className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									setExperienciasDropdown(!experienciasDropdown);
								}}
							>
								Experiencias y áreas
							</div>
							{experienciasDropdown && (
								<div className="bg-gray-50">
									<Link to="/areas" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">Áreas</Link>
									<Link to="/experiencias-areas" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">Experiencias</Link>
									<Link to="/hospedaje" className="block pl-6 pr-2 py-2 text-sm text-principal plus-jakarta-sans-300 hover:bg-secundario border-b border-green">Hospedaje</Link>
								</div>
							)}
						</div>
						<Link to="/tu-visita" className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario">Tu visita</Link>
						<Link to="/blog" className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario">Blog</Link>
						<Link to="/contacto" className="header__nav__item__movil text-left w-full block p-2 text-sm text-principal plus-jakarta-sans-300 border-b-[2px] border-green hover:bg-secundario">Contacto</Link>
					</div>
				)}
			</div>
		</header >
	)
}

export default Header