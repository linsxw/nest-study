import { HttpExceptionFilter } from '@libs/common/filter/http-exception.filter';
import { TransformInterceptor } from '@libs/common/interceptor/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TypeormModule } from './typeorm.module';

async function bootstrap() {
  const app = await NestFactory.create(TypeormModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  const config = new DocumentBuilder()
    .setTitle('TypeORM学习')
    .setDescription('TypeORM学习')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
