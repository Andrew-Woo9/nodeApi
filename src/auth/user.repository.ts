import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const user = this.create(authCredentialsDto);
    await this.save(user);
  }

  async userOnd(id: number): Promise<User> {
    return await this.findOne(id);
  }
}
