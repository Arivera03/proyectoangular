import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit{
  
  nombre = "Juan";

  apellido = "Diaz";

  edad = 18;

  //empresa = "Los huevos que me besa";

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert ("El usuario se acaba de registrar");

    //this.textoDeRegistro="El usuario se acaba de registrar";
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }
  }
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
