import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/group.entity';
import { Photo } from 'src/entities/photo.entity';
import { User } from 'src/entities/user.entity';
import {
  createConnection,
  DeleteResult,
  getConnectionManager,
  Repository,
} from 'typeorm';

@Injectable()
export class UserService {
  defaultConnection = getConnectionManager().get('default');

  async seedUsers() {
    const userRepository = this.defaultConnection.getRepository(User);

    for (let index = 0; index < 1000; index++) {
      const user = new User();

      user.firstName = 'Tim' + index.toString();
      user.lastName = 'Kievit' + index.toString();
      user.prefix = 'de' + index.toString();

      await userRepository.save(user);

      console.log(user);
    }
  }

  async seedGroups() {
    const groupRepository = this.defaultConnection.getRepository(Group);

    for (let index = 0; index < 1000; index++) {
      const group = new Group();

      group.name = 'groep' + index.toString();
      group.description = 'groep voor testen' + index.toString();

      await groupRepository.save(group);

      console.log(group);
    }
  }

  async seedPhotos() {
    const photoRepository = this.defaultConnection.getRepository(Photo);

    for (let index = 0; index < 1000; index++) {
      const photo = new Photo();

      photo.name = 'photo' + index.toString();
      photo.description = 'photo voor testen' + index.toString();

      await photoRepository.save(photo);

      console.log(photo);
    }
  }
}
