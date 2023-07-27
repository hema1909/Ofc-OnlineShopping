import { Order } from "./order.model";

export class Customer{
    public customerId : number | any;
    public customerName : string = "";
    public email : string = "";
    public password : string = "";
    public mobile : number | any;
    public address : string = "";
    public orders : Order[] = [];
}