import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['log', 'error', 'warn'],
  });
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Deenozer')
  .setDescription('Deenozer DB Endpoints')
  // .setVersion('1.0')
  .addTag('deenozer')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
