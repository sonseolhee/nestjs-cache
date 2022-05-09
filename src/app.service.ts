import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    //no limitation what we can cache
    //manually specify a TTL (expiration time in seconds) for this specific key
    await this.cacheManager.set('cached_item', { key: 32 }, { ttl: 10 });
    await this.cacheManager.del('cached_item');
    //To clear the entire cache, use the reset method
    await this.cacheManager.reset();
    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem); //null
    return 'Hello World!';
  }
}
