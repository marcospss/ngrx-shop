import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { LoadingService } from '@core/services/loading.service';

@Component({
  selector: 'mps-loading-animation',
  template: `
    <hr [ngClass]="loading$ | async">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    `,
  styles: [
    `
      .loading {
        margin: 0;
        background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);
        animation: progress 2s ease;
        height: 0.6em;
      }

      @keyframes progress {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }

      .stopped {
        display: none;
      }
    `
  ]
})
export class LoadingAnimationComponent implements OnInit {
  loading$: Observable<string>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()));
  }
}
