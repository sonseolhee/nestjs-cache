import { CACHE_MANAGER } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

const mockCacheManager = {
  set: jest.fn(),
  del: jest.fn(),
  reset: jest.fn(),
  get: jest.fn(),
};

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });
});
