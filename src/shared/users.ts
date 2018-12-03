
import {Social} from'./social';
import {Galeria} from'./galeria';


export interface Users{
    id:number;
    name:string;
    username:string;
    profile_picture:string;
    
    social:Social[];
    image:Galeria[];

}