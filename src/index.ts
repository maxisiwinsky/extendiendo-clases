import product from "./products.json"
class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  products: Product[];
  constructor(name:string){
    super(name);    
    this.products = [];
    product.forEach((p=>this.addProduct(p)));
}

addProduct(product: Product): void {
  // Verificar si ya existe un producto con el mismo ID
  const exists = this.products.filter(p => p.id === product.id).length > 0;

  if (!exists) {
    // Si no existe, agregar el producto
    this.products.push(product);
    this.add(product);
  }
}

getProduct(id:number): Product
{
  return this.products.find(p=>p.id===id);
}

removeProduct(id:number): void
{
  const index = this.products.findIndex(p => p.id === id);
if (index !== -1) {
  this.products.splice(index, 1);
}
}

 getSortedByPrice(order: string): Product[] {
  const copy = this.products;
      if(order==="desc"){
        return copy.sort((a,b)=>b.price-a.price);
      }
      else if(order==="asc"){
        return copy.sort((a,b)=>a.price - b.price);
      }
}
}
export { ListaDeProductos, Product };
