
import React, { useState, useEffect } from 'react';
import { useTrail, a } from '@react-spring/web'
import '../Home/home.css';
import Layout from '../../components/Layout';


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


const Contact = () => {
	const [title, setTitle] = useState(false);

	useEffect(() => {
		setTitle(true);
	}, []);

	return (
		<Layout>
			<div>
				<section className="banner-ppal w-full h-[1200px] px-20 bg-cover bg-center relative pt-[360px] bg-principal">
					<div className="w-full max-w-[1300px] mx-auto">
						<div className="relative z-20 text-center md:text-left">
							<Trail open={title}>
								<span className="text-[129px] text-white mb-10 leading-[130px] uppercase font-ruina title-shadow">Contacto</span>
							</Trail>
						</div>
					</div>
				</section>

			</div>
		</Layout>
	)
}

export default Contact