import logo from "../../P-removebg-preview.png";

export default function AboutPage() {
    return (
        <>
            <h1
            style={{fontSize: "8vmin"}}
            >About</h1>
            <p
            style={{fontSize: "3.4vmin", textAlign: "center", marginLeft: "20vmin", marginRight: "20vmin"}}
            >
                PokéZon is a full-stack MERN application that allows trainers (such as you), to buy the Pokémon Items they need in order to succeed in their journey as a Pokémon trainer! <br /><br />
                From Pokéballs to Potions, PokéZon has it all!
                We're here for you, whether rain, sun-shine, sleet, or snow, we'll be here everyhere you go! 
                And remeber, you have to buy 'em all in order to catch 'em all!
            </p>
            <img
            style={{width: "80vmin", height: "80vmin", marginLeft: "25vmin", marginRight: "25vmin", marginTop: "-5vmin"}}
            src={logo}
            alt="logo" />
        </>
    );
}