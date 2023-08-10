import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 1000,
    // }),
    CacheModule.registerAsync({
      useFactory: async () => ({
        isGlobal: true,
        ttl: 1000,
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
