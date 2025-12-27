class Chai{
  public flavour : string = "masala";

  private secretIngredients ="Cardamom";

  reveal(){
    return this.secretIngredients;
  }

}

class Shop{
  protected shopName :string = "mba chai wala"
}

class Branch extends Shop{
  getName(){
    return this.shopName;
  }
}

const c = new Chai();
c.reveal()


// # or private
// readonly
// static 
// abstract