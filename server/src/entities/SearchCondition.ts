import { IsInt, Min } from "class-validator";


export class SearchCondition {
  @IsInt({ message: '页码最小为1' })
  @Min(1)
  public page: number = 1;

  @IsInt({ message: '页码最小为1' })
  @Min(1)
  public limit: number = 10;
  
  public key: string = '';


}