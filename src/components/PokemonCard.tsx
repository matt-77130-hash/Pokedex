
function PokemonCard({ pokemon }) {



    if (pokemon.imgSrc) {
        return (
            <figure>
                <img src={pokemon.imgSrc} alt={pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
            </figure>


        );
    }
    else {
        return (
            < figure >
                <img src={pokemon.imgSrc} alt={"???"} />
                <figcaption>{pokemon.name}</figcaption>
            </figure >

        )
    };
}





export default PokemonCard;

