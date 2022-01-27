import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { IUser } from 'src/interfaces/user.interface';
import { Repository } from 'typeorm';
import { users } from './data';

/**
 * Service dealing with language based operations.
 *
 * @class
 */
@Injectable()
export class LanguageSeederService {
  /**
   * Create an instance of class.
   *
   * @constructs
   *
   * @param {Repository<User>} userRepository
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  /**
   * Seed all languages.
   *
   * @function
   */
  create(): Array<Promise<User>> {
    return users.map(async (user: IUser) => {
      return await this.userRepository
        .findOne({ firstName: user.firstName })
        .then(async (dbUser) => {
          // We check if a language already exists.
          // If it does don't create a new one.
          if (dbUser) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.userRepository.create(user));
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
