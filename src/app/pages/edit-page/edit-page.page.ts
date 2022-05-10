import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudUserService } from 'src/app/services/crud-user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  constructor(private crudUser: CrudUserService,private modalCtrl: ModalController) { }
  
  
  @Input() nombre;
  @Input() apellido;
  @Input() cedula;
  @Input() correo;
  @Input() uid;
  @Input() fecha;
  


  ngOnInit() {
  }


  updateUser(uid){
    console.log(uid)
    this.crudUser.updateUser(uid,this.nombre,this.apellido,this.cedula,this.correo,this.fecha)
    this.modalCtrl.dismiss()
    
  }
}
