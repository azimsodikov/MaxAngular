import { By } from '@angular/platform-browser';
import { TestHoverFocusComponent } from './hoverfocus-test.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {HoverFocusDirective} from './hoverfocus.directive';
import {DebugElement} from "@angular/core";


describe('Directive: HoverFocus', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, HoverFocusDirective] 
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent); 
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null); //We use triggerEventHandler to simulate events.
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue'); //	The style property on the nativeElement is what we can inspect to see the current style applied to an element.
  
    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    console.log(inputEl.nativeElement.style.backgroundColor);
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});