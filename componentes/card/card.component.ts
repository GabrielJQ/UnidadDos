import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],  changeDetection: ChangeDetectionStrategy.OnPush, 
 templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
