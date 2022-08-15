import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estilo } from 'src/app/models/estilo';
import {enableProdMode} from '@angular/core';

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
  public value: any ;
  
  seleccion: String = '';

 
  constructor(private httpClient:HttpClient, estilo:Estilo) {
   }

  ngOnInit(): void {
    enableProdMode();
    this.cargarEstilos();
    this.cargarEstilosNavbar();
    this.cargarEstilosCard();
    this.cargarEstilosBanner();
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
        this.listaNavbar = res;});
  }

  cargarEstilosCard(){
    this.httpClient.get('http://localhost:8888/obtenerEstilosCard')
    .subscribe(res=>{
        this.listaCard = res;});
  }

  cargarEstilosBanner(){
    this.httpClient.get('http://localhost:8888/obtenerEstilosBanner')
    .subscribe(res=>{
        this.listaBanner = res;});
  }

  //Cargar Los estilos en el html de la pagina

  renderizar(){
    this.seleccion ;
    console.log(this.seleccion);
  }

}
