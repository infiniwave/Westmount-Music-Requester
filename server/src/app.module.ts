import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MusicModule } from "./music/music.module";
import { AuthModule } from "./auth/auth.module";
import { RequestModule } from "./request/request.module";
import { RolesGuard } from "./auth/roles.guard";
import { APP_GUARD } from "@nestjs/core";
import { AdminModule } from "./admin/Admin.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MusicModule, 
    AuthModule, 
    RequestModule, 
    AdminModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client/dist"),
    }),
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
