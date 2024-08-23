interface Rating{
   count: string;
   rate: string;
 }
export interface Item{
   id: string;
   title: string;
   category: string;
   image: string;
   description: string;
   price: string;
   rating: Rating;
}
export type buttonRef = HTMLButtonElement | null;