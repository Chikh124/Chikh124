import { Module } from "@nestjs/common";
import { TikTokAccountModuleBase } from "./base/tikTokAccount.module.base";
import { TikTokAccountService } from "./tikTokAccount.service";
import { TikTokAccountController } from "./tikTokAccount.controller";
import { TikTokAccountResolver } from "./tikTokAccount.resolver";

@Module({
  imports: [TikTokAccountModuleBase],
  controllers: [TikTokAccountController],
  providers: [TikTokAccountService, TikTokAccountResolver],
  exports: [TikTokAccountService],
})
export class TikTokAccountModule {}
