import * as graphql from "@nestjs/graphql";
import { TikTokAccountResolverBase } from "./base/tikTokAccount.resolver.base";
import { TikTokAccount } from "./base/TikTokAccount";
import { TikTokAccountService } from "./tikTokAccount.service";

@graphql.Resolver(() => TikTokAccount)
export class TikTokAccountResolver extends TikTokAccountResolverBase {
  constructor(protected readonly service: TikTokAccountService) {
    super(service);
  }
}
