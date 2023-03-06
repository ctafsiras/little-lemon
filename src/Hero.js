import food_pic from "./assets/restauranfood.jpg";

function Hero() {
    return (
        <div className="hero">
            <div className="main-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={food_pic}></img>
        </div>
    )
}

export default Hero;