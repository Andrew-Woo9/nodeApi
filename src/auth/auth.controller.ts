import { Body, Controller, Get, Param, Post, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger('auth');
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    this.logger.verbose(`User trying to get all boards`, authCredentialsDto);
    return this.authService.signUp(authCredentialsDto);
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: number) {
    const res = await this.authService.getUser(id);
    return Object.assign({
      data: res ? res : [],
      status: 200,
      message: '조회성공',
    });
  }
}
