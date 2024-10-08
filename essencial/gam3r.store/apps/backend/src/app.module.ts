import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { DbModule } from './db/db.module';
import { ProductPrisma } from './product/product.prisma';

@Module({
  imports: [ProductModule, DbModule],
  controllers: [AppController],
  providers: [ProductPrisma],
})
export class AppModule {}
