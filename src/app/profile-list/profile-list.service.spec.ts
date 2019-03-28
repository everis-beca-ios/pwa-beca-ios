import { TestBed } from '@angular/core/testing';

import { ProfileListService } from './profile-list.service';

describe('ProfileListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileListService = TestBed.get(ProfileListService);
    expect(service).toBeTruthy();
  });
});
