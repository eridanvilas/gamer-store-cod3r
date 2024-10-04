import { Controller, Get, Param } from '@nestjs/common';
import { resolve } from 'path';
import { Product, products } from 'src/core';

@Controller('api/product')
export class ProductController {
  @Get()
  async getAllProduct(): Promise<Product[]> {
    return products.map((item) => ({
      ...item,
      specifications: { highlight: item.specifications.highlight },
    }));
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product | null> {
    const product = products.find((product) => product.id === +id);
    return product ?? null; 
  }
}
