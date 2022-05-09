import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

/**
 * To enable auto-caching responses, just tie the CacheInterceptor
 * - Only GET endpoints are cached.
 * - HTTP server routes that inject the native response object (@Res()) cannot use the Cache Interceptor.
 */

// @UseInterceptors(CacheInterceptor) => move to global setting in app.module
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //override certain cache settings
  @CacheKey('cache-key-for-specific-route')
  @CacheTTL(60)
  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
