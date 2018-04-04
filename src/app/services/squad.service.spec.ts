/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquadService } from './squad.service';

describe('SquadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquadService]
    });
  });

  it('should ...', inject([SquadService], (service: SquadService) => {
    expect(service).toBeTruthy();
  }));
});
