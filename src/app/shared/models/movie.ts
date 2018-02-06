export class Movie {

    public id: number;
    public name: string;
    public director: string;
    public imageUrl: string;
    public duration: number;
    public releaseDate: string;
    public genres: string[];

constructor(movie) {
    this.id = movie.id;
    this.name = movie.name;
    this.director = movie.director;
    this.imageUrl = movie.imageUrl;
    this.duration = movie.duration;
    this.releaseDate = movie.releaseDate;
    this.genres = movie.genres;
}

}
