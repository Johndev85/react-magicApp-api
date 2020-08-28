import React, { useState, useEffect } from "react"
import { render } from "react-dom"

class CardApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cards: [] }
    }

    componentDidMount() {
        fetch("https://api.magicthegathering.io/v1/cards")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ cards: data.cards })
                console.log(this.state.cards)
            })
    }

    render() {
        return (
            <>
                {this.state.cards.length > 0 ? (
                    this.state.cards.map((card, i) => {
                        return (
                            <div className="container__card">
                                <div className="container__cards--item">
                                    <h4>{card.name}</h4>
                                    <img src={card.imageUrl} alt="" />
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </>
        )
    }
}

export default CardApp

//------------HOOKS -----------------------
/*
function useCards() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [cards, setCards] = useState({ cards: [] })

    useEffect(() => {
        fetch("https://api.magicthegathering.io/v1/cards")
            .then((res) => res.json())
            .then(
                (data) => {
                    setCards({ cards: data.cards })
                    console.log(cards)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    })

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="container__card">
                <div className="container__cards--item">
                    <h4>{cards.name}</h4>
                    <img src={cards.imageUrl} alt="card" />
                </div>
            </div>
        )
    }
}

const CardsConter = () => {
    return <>{useCards()}</>
}

export default CardsConter
*/
