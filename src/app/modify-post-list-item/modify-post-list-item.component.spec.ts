import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPostListItemComponent } from './modify-post-list-item.component';

describe('ModifyPostListItemComponent', () => {
  let component: ModifyPostListItemComponent;
  let fixture: ComponentFixture<ModifyPostListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyPostListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPostListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
