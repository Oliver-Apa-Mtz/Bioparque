import Header from '../Header';
import Footer from '../Footer';

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			<main className="body-contain">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout