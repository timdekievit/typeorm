import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Photo } from './entities/photo.entity';
import { User } from './entities/user.entity';
import { SeedModule } from './modules/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'onderzoek_typeorm',
      password: 'topsecret',
      database: 'onderzoek_typeorm',
      entities: [User, Photo, Group],
      migrationsTableName: "custom_migration_table",
      migrations: ["migration/*.ts"],
      cli: {
          migrationsDir: "migration"
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeedModule,
  ],
})
export class AppModule {}
