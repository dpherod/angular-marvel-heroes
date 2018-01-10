import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule} from "@angular/material";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {generatePowers} from "../../../core/models/power.model";
import {PowersComponent} from "../../components/powers/powers.component";


describe('{PowersComponent', () => {

  let fixture: ComponentFixture<PowersComponent>;
  let component: PowersComponent;
  // var btn;

  const powers = generatePowers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PowersComponent

      ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersComponent);
    component = fixture.componentInstance;

    //add btn here
    btn = $("input");

    component.powers = powers;
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

  it('should display the first power name', () => {
    let firstPowerEl = fixture.debugElement.query(By.css('.zpower > a'));
    expect(firstPowerEl.nativeElement.textContent).toEqual(powers[0].name);
  });

  // it('should raise the edit/delete menu', async(() => {
  //   spyOn(component, '')
  // }))
  //
  // it('should raise delete event when user clicks delete', () => {
  //   let deletedPower: Power;
  //   let myMenuButton: component.component.deleteChange.subscribe
  //   (power => deletedPower = power);
  //
  //
  //   let de = DebugElement;
  //
  //
  //   const shadowRoot: DocumentFragment = fixture.debugElement.nativeElement.shadowRoot;
  //   const nestedComponentNativeElement = shadowRoot.querySelector('mat-menu');
  //
  //   const nestedComponentDebugElement = <DebugElement>getDebugNode(nestedComponentNativeElement);
  //
  //   var nestedComponentInstance: NesterComponent = nestedComponentDebugElement.componentInstance;
  //
  //   // // let firstDeleteButton = fixture.debugElement.query(By.css('.actions > mat-menu > button:last-child'));
  //   // let firstDeleteButton = fixture.debugElement.query(By.css('cdk-overlay-pane > zbutton'));
  //   // firstDeleteButton.nativeElement.click();
  //   // expect(firstDeleteButton)
  //
  //   // const shadowRoot: DocumentFragment = fixture.debugElement.nativeElement.shadowRoot;
  //   let myDeleteButton = shadowRoot.querySelector('mat-menu');
  //   debugger;
  //   // const nestedComponentNativeElement = shadowRoot.querySelector('my-nested-component')
  //   // expect(firstPowerEl.nativeElement.textContent).toEqual(powers[0].name);
  // })
});
