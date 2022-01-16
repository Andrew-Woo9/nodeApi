import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { AppModule } from '../app.module';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const auth: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([UserRepository]), AppModule],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
    authController = auth.get<AuthController>(AuthController);
  });

  it('해당 아이디 존재 체크', async () => {
    const result = await authController.getUser(17);
    const { data } = result;
    expect(data.name).toBe('홍길동');
  });
});
