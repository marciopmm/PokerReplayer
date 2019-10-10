import { Component, OnInit } from '@angular/core';
import { TextProcessorService } from '../services/text-processor.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  handHistory: string;

  constructor(private processor: TextProcessorService) { }

  ngOnInit() {
  }

  processHH() {
    // 1) Processar o texto
    this.processor.process(this.handHistory);
    // 2) Obter a timeline

    // 3) Enviar e abrir a tela de exibição
  }
}
