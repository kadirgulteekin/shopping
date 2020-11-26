Categories = class {
    constructor(name,price,explanation){
        this.name = name
        this.price = price
        this.explanation = explanation
        this.campaigns = []
    }
    
    prensantatiom(catagories){
        console.log("Ürünün adı : " + Categories.name+ ", Ürünün fiyatı : " + this.price+ ", Ürünün Açıklaması : " + this.explanation)
    }

    discount(campaign){
        this.campaigns.push(Campaign)
        campaign.discounts.push(this)
    }

    
}
Computer = new Categories('Lenovo',5000,'Notebook')
Elektromics = new Categories('Mouse',8000,'deviceforlaptop')
TVS = new Categories('Samsung',15000,'Television')


Campaign = class {
    constructor(product_name,discount_rate){
        this.product_name = product_name
        this.discount_rate = discount_rate
        this.discounts = []
    }
    printDiscountNames(){
        this.discounts.forEach(printProduct)
    }
}
printProduct = Categories => console.log(Categories.name,Categories.price,Categories.explanation)


wtmb = new Campaign('i5')
Computer.discount(wtmb)


wtmb.printDiscountNames()