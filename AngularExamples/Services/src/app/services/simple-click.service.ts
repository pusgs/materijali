import {Injectable} from "@angular/core"

@Injectable()
export class SimpleClick{

    doAlert():void{
        alert("Im in a simple service!");
    }
}