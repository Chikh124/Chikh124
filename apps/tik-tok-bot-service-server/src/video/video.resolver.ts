import * as graphql from "@nestjs/graphql";
import { VideoResolverBase } from "./base/video.resolver.base";
import { Video } from "./base/Video";
import { VideoService } from "./video.service";

@graphql.Resolver(() => Video)
export class VideoResolver extends VideoResolverBase {
  constructor(protected readonly service: VideoService) {
    super(service);
  }
}
