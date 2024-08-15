import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TikTokAccountService } from "./tikTokAccount.service";
import { TikTokAccountControllerBase } from "./base/tikTokAccount.controller.base";

@swagger.ApiTags("tikTokAccounts")
@common.Controller("tikTokAccounts")
export class TikTokAccountController extends TikTokAccountControllerBase {
  constructor(protected readonly service: TikTokAccountService) {
    super(service);
  }
}
