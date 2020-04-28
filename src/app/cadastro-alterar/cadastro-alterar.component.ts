import { Component, OnInit, Input } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-alterar',
  templateUrl: './cadastro-alterar.component.html',
  styleUrls: ['./cadastro-alterar.component.css']
})
export class CadastroAlterarComponent implements OnInit {

  @Input() titulo = "Informação";

  @Input() qualquerCoisa: Object;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public closeModal(){
    this.activeModal.close();
  }

}
