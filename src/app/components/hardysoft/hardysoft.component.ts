import { Hardskill } from './../../model/hardskill';
import { Component, OnInit } from '@angular/core';
import { SHardskillService } from 'src/app/service/s-hardskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  hardskill: Hardskill[] = [];

  constructor(private sHardskill: SHardskillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHardskill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHardskill(): void {
    this.sHardskill.lista().subscribe(data => { this.hardskill = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sHardskill.delete(id).subscribe(
        data => {
          this.cargarHardskill();
        }, err => {
          alert("No se pudo borrar los datos");
        }
      )
    }
  }
  
}
