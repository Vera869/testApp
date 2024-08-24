export const host = "https://fakestoreapi.com/products/";

export async function getAllProducts(category: string){
  const response = await fetch(`${host}category/${category}`);
  if(!response.ok) {
    throw new Error("Произошла ошибка");
  } 
  const data = response.json();

  return data;
}

export async function getProductById(id: string| null){
  const response = await fetch(`${host}${id}`);
  if(!response.ok) {
    throw new Error("Произошла ошибка");
  } 
  const data = response.json();
 
  return data;
}