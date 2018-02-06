export class Movie {
    public id: number;
    public name: string;
    public director: string;
    public image_url: string;
    public duration: number;
    public release_date: Date;
    public genres: any[];

    constructor(id? , name?, director?, image_url?, duration?, release_date?, genres?) {
      this.id = id;
      this.name = name;
      this.director = director;
      this.image_url = image_url;
      this.duration = duration;
      this.release_date = release_date;
      this.genres = genres;
    }
  }


