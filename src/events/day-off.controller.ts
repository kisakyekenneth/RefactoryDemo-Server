import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SentryInterceptor } from "src/utils/sentry.interceptor";
import { DayOffService } from "./day-off.service";
import DayOffSearchDto from "./dto/day-off-search.dto";
import DayOffDto from "./dto/day-off.dto";
import DayOff from "./entities/eventDayOff.entity";

@UseInterceptors(SentryInterceptor)
@UseGuards(JwtAuthGuard)
@ApiTags("Events")
@Controller("api/events/dayoff")
export class DayOffController {
  constructor(private readonly service: DayOffService) {}
  @Get()
  async findAll(): Promise<DayOffDto> {
    return this.service.findAll();
  }

  @Post()
  async create(@Body() data: DayOffDto): Promise<any> {
    return await this.service.create(data);
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    await this.service.remove(id);
  }
  @Put()
  async update(@Body() data: DayOffDto): Promise<any> {
    //   return await this.service.update(data);
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<GroupEventDto> {
  //   return await this.service.findOne(id);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: number): Promise<void> {
  //   await this.service.remove(id);
}
