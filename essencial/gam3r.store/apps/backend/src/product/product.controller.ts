import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from '@gstore/core';
import { ProductPrisma } from './product.prisma';

@Controller('api/product')
export class ProductController {

  constructor(readonly repo: ProductPrisma){}

  @Get()
  async getAllProduct(): Promise<Product[]> {
    const listProduct = await this.repo.getAllProduct();
    return listProduct;
  }

  @Post()
  async insertOrUpdate(@Body() product: Product): Promise<void> {
    return await this.repo.insertOrUpdate(product);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product | null> {
    const product = await  this.repo.getById(+id);
    return product ?? null; 
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const product = await  this.repo.delete(+id);
    return product ?? null; 
  }
}
