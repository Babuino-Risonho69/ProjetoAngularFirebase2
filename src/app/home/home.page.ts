import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ScrollDetail } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '70px',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.3
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class HomePage {
  

  isOpen = true;

  reclamacoes = [
    {
      texto:null
    }
  ];

  reclamacao={
    texto:null
  }

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,
    public _router: Router
  ) { 
    
    
  }

  pegarDados(){
    this._crudService.fetchAll('reclamacao2')
    .then(reclamacoes =>{
      this.reclamacoes = reclamacoes;
      console.log(this.reclamacoes)
      // this.reclamacoes.forEach(elemento =>{
      //   console.log(elemento);
      // })
    })
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    let scrollTop = JSON.stringify(ev.detail.scrollTop);

    if (Number(scrollTop) > 15) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  enviar(){
    this._crudService.insert(this.reclamacao,"reclamacao2")
    this.pegarDados();
    this.reclamacao.texto = null;
  }

  remover(reclamacao: any){
    this._crudService.remove(reclamacao.id, 'reclamacao2');
    this.pegarDados();
  }

 
}
