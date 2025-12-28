class Chai {
    flavour = "masala";
    secretIngredients = "Cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
class Shop {
    shopName = "mba chai wala";
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
const c = new Chai();
c.reveal();
export {};
// # or private
// readonly
// static 
// abstract
//# sourceMappingURL=13_oops.js.map