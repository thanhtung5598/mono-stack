import { Global, Module } from '@nestjs/common';
import {  PrismaService } from '@prisma/shared';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class SharedModule {}
