import { makeAutoObservable } from "mobx";

class Products {
    products = [
        {"id":8739,"uid":"1c5f3500-c5f7-4dd3-97be-6453adce12b3","dish":"Pasta Carbonara","description":"Granny Smith apples mixed with brown sugar and butter filling, in a flaky all-butter crust, with ice cream.","ingredient":"Cranberry","measurement":"3 tablespoon"},
        {"id":5307,"uid":"211ed8ae-e97c-4f3f-94a5-ac779967a990","dish":"Vegetable Soup","description":"Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.","ingredient":"Nectarines","measurement":"3 tablespoon"},
        {"id":3384,"uid":"25a68016-897b-44b8-a1cf-04460a99c684","dish":"Ebiten maki","description":"Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.","ingredient":"Camellia Tea Oil","measurement":"3 teaspoon"},
        {"id":7869,"uid":"da479360-aa0c-4584-8a58-55f6ff4de9ec","dish":"Bunny Chow","description":"Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.","ingredient":"Peppercorns","measurement":"1/3 pint"},{"id":374,"uid":"28a6ce16-a40c-4d73-acfa-6f84202a0b46","dish":"Peking Duck","description":"Breaded fried chicken with waffles, and a side of maple syrup.","ingredient":"William Pear","measurement":"1/4 pint"},
        {"id":8010,"uid":"bef0ac61-67a7-49a6-93c0-12dc1e9e99d2","dish":"Pizza","description":"Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.","ingredient":"Fenugreek","measurement":"3 pint"},
    ];
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Products();
