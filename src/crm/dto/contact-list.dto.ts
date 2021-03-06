import ComboDto from '../../shared/dto/combo.dto';

export default class ContactListDto {
  id: number;
  name: string;
  avatar: string;
  ageGroup: string;
  dateOfBirth: Date | string;
  email: string;
  phone: string;
  cellGroup: ComboDto;
  location: ComboDto;
}
