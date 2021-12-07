import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";
import MovieModal from '../db/MovieSchema';


export class MovieService {
  public static async add(movie: Movie): Promise<IMovie | string[]> {
      // 类型转换
      movie = Movie.transform(movie);
      // 数据验证
      const errors = await movie.validateMovie(false);
      if (errors.length > 0) {
        return errors;
      }
      // 插入到数据库
      return await MovieModal.create(movie);
  }

  public static async edit(id: string, movie: Movie): Promise<string[]>  {
      // 类型转换
      const movieObj = Movie.transform(movie);
      // 数据验证
      const errors = await movieObj.validateMovie(true);
      if (errors.length > 0) {
        return errors;
      }
      await MovieModal.updateOne({ _id: id }, movie);
      return errors;
  }

  public static async delete(id: string): Promise<void> {
    await MovieModal.deleteOne({ _id: id });
  
  }

  public static async findById(id: string): Promise<Movie | null> {
    return await MovieModal.findById({ _id: id });
  }

  public static async find(id: string): Promise<Movie | null> {
    return await MovieModal.findById({ _id: id });
  }


}