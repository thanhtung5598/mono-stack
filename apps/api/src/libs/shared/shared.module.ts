import { Global, Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/shared';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [],
  exports: [],
})
export class SharedModule {}
