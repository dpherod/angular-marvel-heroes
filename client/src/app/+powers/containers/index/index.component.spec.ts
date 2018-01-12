import {HttpClientModule} from "@angular/common/http";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {SharedModule} from "../../../shared/shared.module";
import {StateModule} from "../../../state/state.module";
import {PowersComponent} from "../../components/powers/powers.component";
import {IndexComponent} from "./index.component";

describe('IndexComponent', () => {

  let fixture: ComponentFixture<IndexComponent>;
  let component: IndexComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PowersComponent,
        IndexComponent

      ],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule,
        StateModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //including refactored assertions here to illustrate advantages of fixture/component declaration

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(IndexComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  it('should create the index component', () => {
    // const fixture = TestBed.createComponent(IndexComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
})
