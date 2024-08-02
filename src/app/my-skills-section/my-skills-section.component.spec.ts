import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsSectionComponent } from './my-skills-section.component';

describe('MySkillsSectionComponent', () => {
  let component: MySkillsSectionComponent;
  let fixture: ComponentFixture<MySkillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
