

export class SimpleData{

    myData: string[];

    constructor(){
        this.myData = [];

        this.myData.push("Data 1");
        this.myData.push("Data 2");
        this.myData.push("Data 3");
        this.myData.push("Data 4");
        this.myData.push("Data 5");
    }

    fetchData(): string[] {
        return this.myData;
    }

}