import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureVaultComponent } from './adventure-vault';

describe('AdventureVaultComponent', () => {
  let component: AdventureVaultComponent;
  let fixture: ComponentFixture<AdventureVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureVaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});