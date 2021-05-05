const _contents = [
    {
        "id": 1,
        "logo": 'icon-sedans.svg',
        "type": "Sedans",
        "description": "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
        "id": 2,
        "logo": 'icon-suvs.svg',
        "type": "SUVs",
        "description": "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    },
    {
        "id": 3,
        "logo": 'icon-luxury.svg',
        "type": "Luxury",
        "description": "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    }
]

export default {
    getContents (cb) {
        setTimeout(() => cb(_contents), 100)
      }
    }

    