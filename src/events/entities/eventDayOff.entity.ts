import GroupEvent from "src/events/entities/event.entity";
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity({ name: "daysOff" })
export default class DayOff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  contactId: number;

  @Column({ type: "timestamp" })
  startDate: Date;

  @Column({ type: "timestamp" })
  endDate: Date;

  @Column({ length: 500, nullable: true })
  reason?: string;

  @ManyToOne((type) => GroupEvent, (it) => it.dayOff)
  @JoinColumn()
  event: GroupEvent;
}
