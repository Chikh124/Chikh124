import { Module } from "@nestjs/common";
import { VideoModuleBase } from "./base/video.module.base";
import { VideoService } from "./video.service";
import { VideoController } from "./video.controller";
import { VideoResolver } from "./video.resolver";

@Module({
  imports: [VideoModuleBase],
  controllers: [VideoController],
  providers: [VideoService, VideoResolver],
  exports: [VideoService],
})
export class VideoModule {}
