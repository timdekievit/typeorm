import { Injectable } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Repository } from 'typeorm';
import { AppModule } from './app.module';
import { User } from './entities/user.entity';
import { SeedService} from './services/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seedService = new SeedService();
  await seedService.seedUsers();
  await seedService.seedGroups();
  await seedService.seedPhotos();
  await app.listen(3000);
}
bootstrap();
