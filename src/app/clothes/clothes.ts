import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  imports: [],
  templateUrl: './clothes.html',
  styleUrl: './clothes.css',
})
export class Clothes {
  products1 : any = [
    {
      image : "images/1.png",
      id : 1 ,
      price : 7952,
      brand : "Prada",
      name : "Patchwork Shearling Coat - Black" ,
      link : "From THAHAB"
    },
    {
      image : "images/2.png",
      id : 2 ,
      price : 335,
      brand : "Self-Portrait",
      name : "Sequined Cutout Maxi Dress - White" ,
      link : "From Mytheresa"
    },
    {
      image : "images/3.png",
      id : 3 ,
      price : 605,
      brand : "Solace London",
      name : "Emelia Scarf-Detail Satin Gown - Red" ,
      link : "From Mytheresa"
    },
    {
      image : "images/4.png",
      id : 4 ,
      price : 2248,
      brand : "Dolce & Gabbana",
      name : "Dress With 'Majolica' Print - Purple" ,
      link : "From Dolce & Gabbana"
      
    },
    {
      image : "images/5.png",
      id : 5 ,
      price : 210,
      brand : "Jarlo",
      name : "Willow Strapless Midi Dress - Blue" ,
      link : "From Jarlo"
      
    },
    {
      image : "images/6.png",
      id : 6 ,
      price : 3400,
      brand : "Dolce & Gabbana",
      name : "Printed Satin Dress - Pink",
      link : "From Dolce & Gabbana"
    },
    {
      image : "images/7.png",
      id : 7 ,
      price : 1867,
      brand : "Moncler",
      name : "Jouillat Faux-Fur Down Jacket - Brown" ,
      link : "From Mytheresa"
    },
    {
      image : "images/8.png",
      id : 8 ,
      price : 1867,
      brand : "Moncler",
      name : "Jouillat Faux-Fur Down Jacket - Brown" ,
      link : "From Mytheresa"
    },
    {
      image : "images/9.png",
      id : 9 ,
      price : 8272,
      brand : "Prada",
      name : "Patterned Coat - Natural" ,
      link : "From FARFETCH",
    },
    {
      image : "images/10.png",
      id : 10 ,
      price : 2760,
      brand : "Max Mara",
      name : "Teddy Coat - Brown" ,
      link : "From 24S - LVMH Groupe",
    },
  ]
  products2 : any = [
    {
      image : "images/m1.png",
      id : 1 ,
      price : 128,
      brand : "Nike",
      name : "S Nocta Woven Track Jacket - Black" ,
      link : "From Slam Jam",
    },
    {
      image : "images/m2.png",
      id : 2 ,
      price : 225,
      brand : "Tommy Hilfiger",
      name : "Faux Fur Hooded Puffer Jacket - Black" ,
      link : "From Saks OFF 5TH",
    },
    {
      image : "images/m3.png",
      id : 3 ,
      price : 571,
      brand : "Dolce & Gabbana",
      name : "Dg Embroidered T-Shirt With Lettering Logo Print - Black" ,
      link : "From Dolce & Gabbana",
    },
    {
      image : "images/m4.png",
      id : 4 ,
      price : 801,
      brand : "Dolce & Gabbana",
      name : "Jersey Zip-up Hoodie - Black" ,
      link : "From Dolce & Gabbana",
    },
    {
      image : "images/m5.png",
      id : 5 ,
      price : 3570,
      brand : "Prada",
      name : "Wool-Blend Teddy Jacket - Brown" ,
      link : "From FARFETCH",
    },
    {
      image : "images/m6.png",
      id : 6 ,
      price : 510,
      brand : "Burberry",
      name : "T-Shirts And Polos - Blue" ,
      link : "From Jomashop",
    },
    {
      image : "images/m7.png",
      id : 7 ,
      price : 5142,
      brand : "Prada",
      name : "Shearling-Collar Jacket - Brown" ,
      link : "From Mytheresa",
    },
    {
      image : "images/m8.png",
      id : 8 ,
      price : 1601,
      brand : "Burberry",
      name : "Detachable Sleeve Puffer Jacket - Blue" ,
      link : "From FARFETCH",
    },
    {
      image : "images/m9.png",
      id : 9 ,
      price : 250,
      brand : "Karl Lagerfeld",
      name : "Hooded Down Regular-Fit Jacket - Black" ,
      link : "From Saks OFF 5TH",
    },

    {
      image : "images/m10.png",
      id : 10 ,
      price : 90,
      brand : "Polo Ralph Lauren",
      name : "Embroidered Pony Full-Zip Hoodie - White" ,
      link : "From Dolce & Gabbana",
    },
    {
      image : "images/m11.png",
      id : 11 ,
      price : 2268,
      brand : "Moncler",
      name : "Maya Short Down Jacket With Hood - Black" ,
      link : "From Balardi",
    },
  ]
}






