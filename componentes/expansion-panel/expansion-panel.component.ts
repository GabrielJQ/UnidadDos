import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.css'
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(false);
}
