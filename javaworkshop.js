Categories = class {
    constructor(name,price,explanation){
        this.name = name
        this.price = price
        this.explanation = explanation
        this.campaigns = []
        this.baskets = []
      
    }
    
    prensantatiom(catagories){
        console.log("Ürünün adı : " + Categories.name+ ", Ürünün fiyatı : " + this.price+ ", Ürünün Açıklaması : " + this.explanation)
     
    }

    discount(campaign){
        this.campaigns.push(Campaign)
        campaign.discounts.push(this)
    }

    content(basket){
        this.baskets.push(Basket)
        basket.contents.push(this)
        

    }
}
Basket  = class {
    constructor(name,price,explanation){
        this.name = name
        this.price = price
        this.explanation = explanation
        this.contents = []

 

   }
    
           printContentNames() {
        this.contents.forEach(printProduct)
        console.log(this.contents[0].name)


     }
     
    
}

Computer = new Categories('Lenovo',5000,'Notebook')
Elektromics = new Categories('Mouse',8000,'deviceforlaptop')
TVS = new Categories('Samsung',15000,'Television')


Campaign = class {
    constructor(product_name,discount_rate){
        this.product_name = product_name
        this.discounts = []
        
        
    }
    printDiscountNames(){
       
        this.discounts.forEach(printProduct)
       
    }
     printBasketsNamestNames(){
       
        this.discounts.forEach(printMyProduct)
       
    }
}
printProduct = Categories => console.log(Categories.name,Categories.price,Categories.explanation)
printMyProduct = Basket => console.log(basket.name,basket.price,basket.explanation,basket.amounts)


wtmb = new Campaign('%15')
vaov = new Campaign('%20')
ballon = new Campaign('%-20')


Computer.discount(wtmb)
Elektromics.discount(wtmb)
TVS.content(wtmb)
TWS.discounts(wtmb)


wtmb.printDiscountNames()
wtmb.printBasketsNames()








