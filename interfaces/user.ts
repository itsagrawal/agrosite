export interface contactDet {
  mobileNo: number;
  address: string;
  mailid: string;
}

export class User {
  name: string;
  id: string;
  contactDet: contactDet;

  constructor(name: string, id: string, contactDet: contactDet) {
    this.name = name;
    this.id = id;
    this.contactDet = contactDet;
  }
}
