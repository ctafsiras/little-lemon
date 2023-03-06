import Card from "./Card";
import salad from "./assets/greek salad.jpg";
import bru from "./assets/bruchetta.svg";
import dessert from "./assets/lemon dessert.jpg";

function Highlights() {
    return (
        <div className="highlights">
            <Card image={salad} title={"Greek salad"} price={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "} />
            <Card image={bru} title={"Bruchetta"} price={"$ 5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "} />
            <Card image={dessert} title={"Lemon Dessert"} price={"$ 5.00"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} />
        </div>
    )
}

export default Highlights;