import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Nestjs API')
    .setDescription('Employee heirarchy API')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app, config, {
  deepScanRoutes: true,
});
SwaggerModule.setup('api', app, document);
app.enableCors();
  await app.listen(5000);
}
bootstrap();
