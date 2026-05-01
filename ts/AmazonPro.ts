

class   AmazonProduct{

    productName:string;
    category:string;
    static brandName:string;

    constructor(productName:string,category:string){

        this.productName=productName;
        this.category=category;
        // this.brandName=brandName;
    }

    brand(){
        console.log(`Product is  ${this.productName}  Brand is  - ${AmazonProduct.brandName}`)
    }

}

let amazonProduct=new AmazonProduct("mobile","electronics");
AmazonProduct.brandName="amazon";
amazonProduct.brand();

let amazonProduct1=new AmazonProduct("Laptop","electronics");
amazonProduct1.brand();

