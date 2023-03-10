import React from "react";
import { client } from "../lib/client";
import {
	Navbar,
	Product,
	HeroBanner,
	FooterBanner,
	Footer,
	Layout,
	Cart,
} from "../components/index";

const Home = ({ products, bannerData }) => {
	console.log(bannerData[0]);
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />

			<div className="products-heading">
				<h2>Best Selling Cats and Products</h2>
				<p>beautiful cats and accessories</p>
			</div>
			<div className="products-container">
				{products.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};
export default Home;
