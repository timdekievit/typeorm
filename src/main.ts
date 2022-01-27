import { Injectable } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Repository } from 'typeorm';
import { AppModule } from './app.module';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userService = new UserService();
  // userService.seedUsers();
  // userService.seedGroups();
  // userService.seedPhotos();
  await app.listen(3000);
}
bootstrap();
