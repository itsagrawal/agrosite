import { User } from "./user"

export interface price {
    value: number,
    symbol: string
}

export class Equipment {
    name: string
    price: price
    description?: string
    owner: User

    constructor({ name, price, owner }: Partial<Equipment>) {
        this.name = name
        this.price = price
        this.owner = owner
    }

    addDescription({ description }: { description: Equipment['description'] }) {
        this.description = description
    }


}

let v: Equipment["price"] = { symbol: "INR", value: 555 }
let o: Equipment["owner"] = { contactDet: { address: "", mailid: "", mobileNo: 0 }, id: "", name: "" }
let e: Equipment = new Equipment({ name: "Grassops", price: v, owner: o })
e.addDescription({ description: "" })

