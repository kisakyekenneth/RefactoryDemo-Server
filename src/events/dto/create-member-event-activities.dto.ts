import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateMemberEventActivitiesDto {

   
    @Type(() => Number)
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    activitiesId: number;
    
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    contactId:number;

}
