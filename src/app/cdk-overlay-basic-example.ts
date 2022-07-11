import {
  Overlay,
  ScrollStrategy,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material/autocomplete';

// export function scrollFactory(overlay: Overlay): () => ScrollStrategy {
//   return () => overlay.scrollStrategies.block();
// }

/**
 * @title Overlay basic example
 */
@Component({
  selector: 'cdk-overlay-basic-example',
  templateUrl: './cdk-overlay-basic-example.html',
  styleUrls: ['./cdk-overlay-basic-example.css'],
})
export class CdkOverlayBasicExample {
  options: string[] = ['one', 'two', 'three', 'four', 'five'];
  scrollStrategy: ScrollStrategy;

  isOpen = false;

  constructor(private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.block();
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
