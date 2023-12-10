import CardMovies from "./CardMovies"

const ListMovies=({liste,Movies,rate})=>{
    var x = liste.filter((el)=>el.titre.toUpperCase().includes(Movies.toUpperCase()) && el.rating >= rate)
    return(
        <div className="bob">
            { x.length === 0 ? <h2> Movies Not Found</h2>  : x.map((el)=> <CardMovies el ={el} />)
            }
        </div>
    )
}

export default ListMovies