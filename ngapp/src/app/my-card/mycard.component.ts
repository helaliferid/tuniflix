import { Component } from "@angular/core"

@Component({
   selector:'app-mycard',
   templateUrl:'./mycard.component.html',
   styleUrls:['./mycard.component.scss'] 
})
export class MyCardComponent{
    title:string='Titanic'
    description:string='Le bateau qui a écoulé a cause d\'un iceburg '
    cover:string='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TitanicBeken.jpg/330px-TitanicBeken.jpg'


}