import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutShellModule } from "../../layout-shell.module";
import { CardContainerComponent } from "./card-container.component";

describe("CardContainerComponent", () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
