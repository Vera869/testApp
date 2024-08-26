import { Item } from "../Types";

export const host = "https://fakestoreapi.com/products/";

export async function getAllProducts(category: string): Promise<Item[]>{
  const response = await fetch(`${host}category/${category}`);
  if(!response.ok) {
    throw new Error("Произошла ошибка");
  } 
  const data: Promise<Item[]> = response.json();

  return data;
}

export async function getProductById(id: string| undefined): Promise<Item>{
  const response = await fetch(`${host}${id}`);
  if(!response.ok) {
    throw new Error("Произошла ошибка");
  } 
  const data: Promise<Item> = response.json();
 
  return data;
}