import { Type } from "class-transformer";
import { IsNumber } from "class-validator";
import SearchDto from "src/shared/dto/search.dto";

export default class MemberEventActivitiesSearchDto extends SearchDto {
  
  activityId?: number;
  
  contactId?: number;
}
