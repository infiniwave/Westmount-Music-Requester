import { Body, Controller, Get, Header, InternalServerErrorException, Post, Query, UseGuards } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { AuthenticatedGuard } from "../auth/authenticated.guard";
import { Roles } from "../auth/roles.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { MusicService } from "./music.service";

@Controller("/api/music")
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Throttle(3, 10)
  @Post("/search")
  @Roles("USE_REQUESTER")
  @UseGuards(AuthenticatedGuard, RolesGuard)
  async search(@Body("query") query: string) {
    return await this.musicService.searchSpotify(query);
  }

  @Throttle(6, 10)
  @Get("/source")
  @Roles("USE_REQUESTER")
  @UseGuards(AuthenticatedGuard, RolesGuard)
  async getSource(@Query("id") id: string) {
    const source = await this.musicService.getYtSource(id);

    if (!source) throw new InternalServerErrorException();

    return source;
  }

  @Throttle(4, 5)
  @Get("/info")
  @Roles("USE_REQUESTER")
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Header("Content-Type", "application/json")
  async getInfo(@Query("song") query: string) {
    return await this.musicService.searchYt(query);
  }
}
