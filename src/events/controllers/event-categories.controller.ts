import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import EventCategory from "../entities/eventCategory.entity";
import { Repository } from "typeorm";
import { SentryInterceptor } from "src/utils/sentry.interceptor";

@UseInterceptors(SentryInterceptor)
@UseGuards(JwtAuthGuard)
@ApiTags("Events Categories")
@Controller("api/events/category")
export class EventsCategoriesController {
  constructor(
    @InjectRepository(EventCategory)
    private readonly repository: Repository<EventCategory>,
  ) {}

  @Get()
  async findAll(): Promise<EventCategory[]> {
    return await this.repository.find({});
  }

  @Post()
  async create(@Body() data: EventCategory): Promise<EventCategory> {
    return this.repository.save(data);
  }

  @Put()
  async update(@Body() { id, ...data }: EventCategory): Promise<EventCategory> {
    await this.repository.update(id, data);
    return this.repository.findOne({ where: { id } });
  }

  @Get(":id")
  async findOne(@Param("id") id: any): Promise<EventCategory> {
    return await this.repository.findOne(id, {
      relations: ["fields"],
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: any): Promise<void> {
    await this.repository.delete(id);
  }
}
