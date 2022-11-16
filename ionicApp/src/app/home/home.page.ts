import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"

  calcular(){
    //Validar se os campos foram preenchidos
    if(this.precoAlcool && this.precoGasolina){

      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      // Faz cálculo resultado (PrecoAlcool / precoGasolina)
      // se: resultado >=0.7 melhor utilizar gasolina 
      // Senão: melhor utilizar álcool

      var res = pAlcool / pGasolina
      if(res >= 7){
       this.resultado = "Melhor utilizar gasolina"
      }else{
        this.resultado = "Melhor utilizar o álcool"
      }


    }else{
        this.resultado = "Preencha corretamento os campos!  "
    }
  }
}
  // constructor() {}
  // public titulo: String = "Meu primeiro App"
  // public imagemRandomica: String = "https://source.unsplash.com/random/200x200"

  // public imagemLocal: String = "../assets/foto3.jpg"

  // public atualiza(): void {

  //   this.titulo = "Texto alterado"
  // }

  // public acao(): void {
    
  //   this.titulo = "Botão Clicado"
  // }


