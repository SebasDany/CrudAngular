import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { EditPagePage } from '../edit-page/edit-page.page';


import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { CrudUserService } from 'src/app/services/crud-user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  




  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  //productos
  nombre: string;
  apellido:string;
  cedula:string;
  correo:string;
  fecha:string
  userPlantec
  





  validation_messages = {

    'nombre': [
      { type: 'required', message: 'Se requiere nombre' },
    ],
    'apellido': [
      { type: 'required', message: 'Se requiere apellido' },
    ],
    'cedula': [
     
      { type: 'required', message: 'Cedula requrida' },
      { type: 'minLength', message: 'Cedula de 10 digitos requerida ' },
      { type: 'maxLength', message: 'Cedula de 10 digitos requerida ' },
      { type: 'pattern', message: 'Ingrese valores del 1 al 9.' },
      
    
    ],
    'correo': [
      { type: 'required', message: 'Se requiere email.' },
      { type: 'pattern', message: 'Ingrese un email valido.' }
    ],
    'fecha': [
      { type: 'required', message: 'Fecha requerida' },
    ],

    
    
  }




  constructor(
    private sanitizer: DomSanitizer,
    private afs: AngularFireDatabase,
    
    private navCtrl: NavController,
      private formBuilder: FormBuilder,
    private crudUser: CrudUserService,
    private alertCtroller: AlertController,
    private modalCtrl: ModalController,
    //public prodServ: CrudProductosService
    ) {

      this.validations_form = this.formBuilder.group({
        nombre: new FormControl('', Validators.compose([
          Validators.required,
          //Validators.minLength(4)
        ])),
        apellido: new FormControl('', Validators.compose([
          Validators.required,
         
        ])),
        cedula: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ])),
        correo: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),

        
        fecha: new FormControl('', Validators.compose([
          Validators.required,
          
        ])),

      })
      
     }
     textbuscar=""
     

  ngOnInit() {
    this.getUser()

    
  }

  
  
 
  
  
getUser(){
  this.afs.list('userPlantec/').valueChanges().subscribe(data => {
    this.userPlantec = data
  })
}
  registerUser() {
    
  

          this.crudUser.register(this.nombre,this.apellido,this.cedula,this.correo,this.fecha).then(res=>{
            console.log(res)

          })
          this.successRegister()
          this.validations_form.reset()

        
     
        }
    
    

  async successRegister() {
    const alert = await this.alertCtroller.create({
      animated: true,
      cssClass: 'succes',
      header: 'Registro',
      message: 'Se a regsitrado correctamente',
      buttons: ['OK']

    })
    await alert.present();
  }

  

  // async presentToast() {
  //   let toast = await this.toastCtrl.create({
  //     message: 'Producto Ingresado correctamente',
  //     duration: 1000,
     
  //   });
  
  
  //   toast.present();
  // }

 
  
  removeUser(uid){
    this.crudUser.removeUser(uid)

  }

  
  async editUser(uid,nombre,apellido, cedula,correo, fecha){
    console.log(uid)

    const modal = await this.modalCtrl.create({
      component: EditPagePage,
      componentProps: {
        uid: uid,
        
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        
        correo: correo,
        
        fecha: fecha,
       
      
      }
    })
    return await modal.present();
  }
  buscar(e){
   
  this.textbuscar=e.detail.value
  console.log(this.textbuscar)
    
  }
}
