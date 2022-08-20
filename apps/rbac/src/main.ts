import { HttpExceptionFilter } from '@libs/common/filter/http-exception.filter';
import { TransformInterceptor } from '@libs/common/interceptor/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RbacModule } from './rbac.module';

async function bootstrap() {
  const app = await NestFactory.create(RbacModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  const config = new DocumentBuilder()
    .setTitle('RBAC权限认证学习')
    .setDescription('RBAC权限相关接口API文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
