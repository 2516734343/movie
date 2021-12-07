import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
import { MovieModal } from './db';
import { MovieService } from "./services/MovieService";
import { IMovie } from "./db/MovieSchema";

let str: string = 'hello';

const movie = new Movie();
MovieService.add(movie).then(result => {
  // let r: Exclude<typeof result, string[]> = result as IMovie;
  if (Array.isArray(result)) {
    console.log(result);
  } else {
    console.log(result);
  }
})