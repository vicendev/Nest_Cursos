import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

  @Get('home')
  getRootRoute() {
    return 'Hi there!';
  }

  @Get('/bye')
  getByeThere(){
    return 'bye there';
  }
}