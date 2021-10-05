import { ServiceImpl } from './service-impl';
export interface Client {
    email:String,
    fullName:String,
    phone:String,
    question?:String,
    subscribedService?:ServiceImpl

}
