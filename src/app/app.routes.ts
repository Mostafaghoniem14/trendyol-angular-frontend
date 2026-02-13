import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contactus } from './contactus/contactus';
import { Clothes } from './clothes/clothes';
import { Shoes } from './shoes/shoes';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path:'' , redirectTo:"home" , pathMatch:"full"},
    {path: 'home' , component : Home},
    {path :'contactus' , component: Contactus},
    {path: 'clothes' , component: Clothes},
    {path : "shoes" , component :Shoes},
    {path: '**' , component:Notfound},
    
];
