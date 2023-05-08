import { Equipment } from "./equipment";

class ledger {
  title: string;
  timePeriodMonths: number;
  availableTill: Date;
  equipments: Equipment[];
  isInsured?: boolean;

  constructor({ title, timePeriodMonths, availableTill, equipments }: ledger) {
    this.title = title;
    this.timePeriodMonths = timePeriodMonths;
    this.availableTill = availableTill;
    this.equipments = equipments;
  }

  static sortByTimePeriod() {}

  static searchByEquipmentName() {}

  static sortByAvailableTill() {}
}
