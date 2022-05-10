import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  constructor(private afs: AngularFireDatabase) { }

  register(nombre,apellido,cedula,correo, fecha){
    const prod = this.afs.database.ref('/userPlantec/')
      const uid = prod.push().key
    

    return this.afs.object('userPlantec/'+uid).set({
            
      uid: uid,
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      correo:correo,
      fecha:fecha
     
     
      
    })

    

    

  }

  updateUser(uid,nombre,apellido,cedula,correo, fecha){
    this.afs.object('userPlantec/'+uid+"/").update({
            
    
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      correo:correo,
      fecha:fecha
     
     
      
    })

  }
  removeUser(uid,uid_prod: string){
    this.afs.database.ref('producto/'+uid+"/"+uid_prod).remove();
  }
  


  
}
