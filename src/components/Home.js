import React from "react";
import Games from "../Games.json";

function Home() {
    return (
        <div>
            <div className="home-banner">  </div>
            <h1 className="dl-head">Dying Light 2: Stay Human</h1>
            <p className="dl-description">The decision-based game will take you on different journeys based on your choices throughout the events that unfold.
                It provides a variety of elements to try, like advanced scavenging, stealth, carnage, hardcore parkour, etc.
                Thus, it is one of the best AAA games of 2022.
            </p>
            <br />
            <br />
            <div className="lg-wrapper">
                <hr className="hr-divider"></hr>

                <h2 className="lg-head">Top AAA Games 2022</h2>
                <br />
                <br />
                <div className="latest-games-container">
                    {Object.keys(Games).map((keyName) => {
                        const game = Games[keyName];
                        console.log(game);
                        return (
                            <div className="game-product" key={keyName}>
                                <img className="img-latest-game" src={game.img}></img>
                                <h3 className="lg-caption">{game.name}</h3>
                            </div>
                        )

                    })}
                </div>
                <hr className="hr-divider"></hr>
            </div>
            
        </div>

    )
}


export default Home;