export class Product {
    id: number=0;
    name: string="";
    description: string="";
    price: number=0;
    imageUrl: string="";

    constructor(id: number, name: string, description: string="", price: number=0, imageUrl: string="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}
