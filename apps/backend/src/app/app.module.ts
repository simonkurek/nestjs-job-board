import { Module } from "@nestjs/common";
import {ApiFeatureConfigModule} from "@nestjs-job-board/api/feature-config";

@Module({
  imports: [
    ApiFeatureConfigModule,
  ],
  controllers: [],
})
export class AppModule {}
