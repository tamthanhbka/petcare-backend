import { IsNotEmpty, IsNumber, Matches } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  @IsNumber()
  @Matches('[1,2,3,4,5]')
  value: 1 | 2 | 3 | 4 | 5;
  @IsNotEmpty()
  @IsNumber()
  shopId: number;
}
