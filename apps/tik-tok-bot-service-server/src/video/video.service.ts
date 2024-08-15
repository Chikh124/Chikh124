import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoServiceBase } from "./base/video.service.base";

@Injectable()
export class VideoService extends VideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
