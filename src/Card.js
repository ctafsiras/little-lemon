function Card({ image, title, price, description }) {
    return (
        <section className="card">
            <img src={image} alt={title} />
            <div className="text-section">
                <div className="title">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <p>{description}</p>
                <button>Order deliver</button>
            </div>
        </section>
    )
}

export default Card;