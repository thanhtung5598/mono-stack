import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Mono Stack')
    .addBearerAuth()
    .build();
  console.log('test');

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(`api/docs`, app, document);

  app.enableCors();

  await app.listen(process.env.NODE_PORT ?? 3001);
}
bootstrap();
