import placeholder from "../noimageplaceholder.png"

export function getMoviePos(path, width){
    return  path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}