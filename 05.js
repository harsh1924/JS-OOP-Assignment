function Product(name, category, price, stock) {
    this.name = name
    this.category = category
    this.price = price
    this.stock = stock
};
function Inventory() {
    this.products = []
};

Inventory.prototype.addProduct = function (product) {
    if (product instanceof Product) {
        this.products.push(product)
        console.log(`Added ${product.name} to the Inventory`);
    }
};

Inventory.prototype.deleteProduct = function (name) {
    const index = this.products.findIndex((product) => product.name === name);
    if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Deleted ${name} from Inventory`);
    }
}

const inventory = new Inventory();

const productOne = new Product("PS5", "Gaming Console", 55390, 345);
const productTwo = new Product("HP Pavillion", "Electronics", 60000, 343);

inventory.addProduct(productOne);   // Added PS5 to the Inventory
inventory.addProduct(productTwo);   // Added HP Pavillion to the Inventory
inventory.deleteProduct('PS5');     // Deleted PS5 from Inventory