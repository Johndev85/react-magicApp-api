import React from "react"

class CardApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cards: [] }
    }

    componentWillMount() {
        fetch("https://api.magicthegathering.io/v1/cards")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ cards: data })
                console.log(this.state.cards)
            })
    }

    render() {
        return (
            <>
                {this.state.cards.length > 0 ? (
                    this.state.cards.map((card, i) => {
                        return <h3 key={i}>{card.name}</h3>
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </>
        )
    }
}

export default CardApp
