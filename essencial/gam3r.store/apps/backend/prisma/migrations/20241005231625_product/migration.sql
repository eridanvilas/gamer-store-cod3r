-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "videoReview" TEXT NOT NULL,
    "assessment" TEXT NOT NULL,
    "tags" TEXT[],
    "precoBase" DOUBLE PRECISION NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "promotionalPrice" DOUBLE PRECISION NOT NULL,
    "lowestPrice" DOUBLE PRECISION NOT NULL,
    "highestPrice" DOUBLE PRECISION NOT NULL,
    "avgPrice" DOUBLE PRECISION NOT NULL,
    "specifications" JSONB NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
