import { Test, TestingModule } from '@nestjs/testing';
import { InstructorResolver } from './instructor.resolver';

describe('InstructorResolver', () => {
  let resolver: InstructorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorResolver],
    }).compile();

    resolver = module.get<InstructorResolver>(InstructorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
