import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

//localhost:300/cat/great
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  public getHello(): string {
    return this.catService.getHello();
  }

  @Get('greet')
  public Introduce(): string {
    return this.catService.introduce();
  }
}
