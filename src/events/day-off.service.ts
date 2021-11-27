import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import DayOffSearchDto from "./dto/day-off-search.dto";
import DayOffDto from "./dto/day-off.dto";
import DayOff from "./entities/eventDayOff.entity";

@Injectable()
export class DayOffService {
  constructor(
    @InjectRepository(DayOff)
    private readonly repository: Repository<DayOff>,
  ) {}

  async findAll(): Promise<DayOffDto | any> {
    const dayoffdata = await this.repository.find({
      relations: ["event"],
    });
    return dayoffdata;
  }

  async create(data: DayOffDto): Promise<any> {
    console.log(data);
    return await this.repository.save(data);
  }

  async findOne(id: number): Promise<DayOff> {
    return await this.repository.findOne(id);
  }

  async update(data: DayOff): Promise<DayOff | any> {
    return await this.repository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
