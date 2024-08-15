import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TikTokAccountServiceBase } from "./base/tikTokAccount.service.base";

@Injectable()
export class TikTokAccountService extends TikTokAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
