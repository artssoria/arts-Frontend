import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardskill } from 'src/app/model/hardskill';
import { SHardskillService } from 'src/app/service/s-hardskill.service';

@Component({
  selector: 'app-newhardysoftskill',
  templateUrl: './newhardysoftskill.component.html',
  styleUrls: ['./newhardysoftskill.component.css']
})
export class NewhardysoftskillComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  
  constructor(private sHardskill: SHardskillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Hardskill(this.nombreE, this.descripcionE);
    this.sHardskill.save(expe).subscribe(
      data => {
        alert("Hardskill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
