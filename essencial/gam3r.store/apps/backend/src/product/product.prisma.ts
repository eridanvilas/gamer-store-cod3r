import { Injectable } from '@nestjs/common';
import { Product } from '@gstore/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductPrisma {

    constructor(readonly prisma: PrismaProvider) {}

    async insertOrUpdate(product: Product): Promise<void>{
        await this.prisma.product.upsert({
            where: {id: product.id ?? -1},
            update: product,
            create: product
        });
    }

    async getAllProduct(): Promise<Product[]> {
        const listProduct =  await this.prisma.product.findMany() as any;
        return listProduct;
    }

    async getById(id: number): Promise<Product> {
        const product = await this.prisma.product.findUnique({ where: {id}}) as any;
        return  product;
    }

    async delete(id: number): Promise<void> {
        return  await this.prisma.product.delete({ where: {id}}) as any;
    }

}
