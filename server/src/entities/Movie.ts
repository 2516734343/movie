import { ArrayMinSize, IsInt, IsNotEmpty, Min, MinLength, validate } from "class-validator";
import { plainToClass, Type } from 'class-transformer';
export class Movie {

  @IsNotEmpty({ message: '电影名称不可以为空' })
  @Type(() => String)
  public name: string = ''

  @IsNotEmpty({message: '电影类型不可以为空'})
  @ArrayMinSize(1, {message: '电影类型长度至少为1'})
  public types: string[] = []

  @IsNotEmpty({message: '上映地区不可以为空'})
  @ArrayMinSize(1, {message: '上映地区至少为1个'})
  public areas: string[] = []


  @IsNotEmpty({ message: '时长不可以为空' })
  @IsInt({ message: '时长必须为整数' })
  @Min(1, {message: '时长最小1分钟'})
  public timeLong: string[] = []

  public isHot: boolean; // 是否热映

  public isComing: boolean; // 是否即将上映

  public isClasic: boolean; // 是否属于经典电影

  public description?: string; // 简介

  public poster?: string = ''; // 海报

/**
 * 验证当前电影对象
 */
  public async validateMovie(skipMissing: boolean): Promise<string[]> {
    const errors = await validate(this, {
      skipMissingProperties: skipMissing
    });
    return errors.map(e => Object.values(e.constraints || [])).flat()
  }

  public static transform(plainObject: object): Movie {
    if (plainObject instanceof Movie) {
      return plainObject;
    }
    return plainToClass(Movie. transform)
  }

}