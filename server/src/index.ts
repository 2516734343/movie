import { Movie } from "./entities/Movie";
import { validate } from "class-validator";

let str: string = 'hello';

const movie = new Movie();
validate(movie).then(errors => {
  console.log(errors);
})
console.log(str);