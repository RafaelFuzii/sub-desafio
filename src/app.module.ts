import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_GUARD } from '@nestjs/core';



@Module({
    imports: [ 
        MongooseModule.forRoot('mongodb://localhost/desafio-sub'),
        UsersModule,
        ProductsModule,
        AuthModule,
        CacheModule.register({
          ttl: 60,
          max: 100,
          isGlobal: true
        }),
    ],
  controllers: [AppController],
  providers: [AppService]
  
})
export class AppModule {}
