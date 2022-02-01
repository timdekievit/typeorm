import { Module } from '@nestjs/common';
import { SeedService} from 'src/services/seed.service';


@Module({
  exports: [SeedService],
  providers: [SeedService],
})
export class SeedModule {}