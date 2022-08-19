import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

@Module({
  imports: [HttpExceptionFilter, TransformInterceptor],
  providers: [],
  exports: [HttpExceptionFilter, TransformInterceptor],
})
export class CommonModule {}
