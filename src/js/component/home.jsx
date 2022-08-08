import React from "react";
import Card from "./card";
import Navbar from "./nav";
import Hero from "./hero";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className = "container">
			<Hero />
			<div className = "row">
					<Card url="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"/>
					<Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCMqJZ4tSm493nuW2cXl60FyuNrr-svvxAy6y4A-vsky_lhWkx8TDGgTkQrjlWMuSlJU&usqp=CAU"/>
					<Card url="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/36DFE80A-776A-49F7-B4BB-273C0A702BEE/Derivates/b6c3bc06-581e-4da9-a38f-8b6d47d62891.jpg"/>
					<Card url="https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2021/05/pizza-vegana.jpg?fit=750%2C500&ssl=1"/>
			</div>
		</div>
		<Footer />
		</>
	);
};

export default Home;
