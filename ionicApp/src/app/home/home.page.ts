import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // constructor() {}
  public titulo: String = "Meu primeiro App"
  public imagemRandomica: String = "https://source.unsplash.com/random/200x200"

  public imagemLocal: String = "../assets/foto3.jpg"

  public atualiza(): void {

    this.titulo = "Texto alterado"
  }

  public acao(): void {
    
    this.titulo = "Botão Clicado"
  }

}
