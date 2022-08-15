import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estilo } from 'src/app/models/estilo';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})



export class EmpresaComponent implements OnInit {

  public listaEstilos: any = [];
  public listaNavbar: any = [];
  public listaCard: any = [];
  public listaBanner: any = [];

 
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.cargarEstilos();
    this.cargarEstilosNavbar();
    this.cargarEstilosCard();
  }

  cargarEstilos(){
    this.httpClient.get('http://localhost:8888/obtenerEstilos')
    .subscribe(res=>{
        this.listaEstilos = res;
        console.log(this.listaEstilos);});
  }

  cargarEstilosNavbar(){
    this.httpClient.get('http://localhost:8888/obtenerEstilosNavbar')
    .subscribe(res=>{
        this.listaNavbar = res;
        console.log(this.listaNavbar);});
  }

  cargarEstilosCard(){
    this.httpClient.get('http://localhost:8888/obtenerEstilosCard')
    .subscribe(res=>{
        this.listaCard = res;
        console.log(this.listaCard);});
  }

}
