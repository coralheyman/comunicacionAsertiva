import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../services/comunicacion.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  comunicacion: any;
  safeURL: any;
  constructor(public service: ComunicacionService, private _sanitizer: DomSanitizer) {}


  ngOnInit(): void {}

  seeStep(comunicacion: any) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(comunicacion.video);
    this.comunicacion = comunicacion;
  }
}
