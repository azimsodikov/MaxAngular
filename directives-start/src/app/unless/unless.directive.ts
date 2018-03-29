import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  // So we need access to the template we are injecting to, and second parameter is where should we render it in the app
      @Input() set appUnless(condition: boolean) {
        if(!condition){
          this.vcRef.createEmbeddedView(this.templateRef);
          // we are using createView method on this to create the view
        }else{
          this.vcRef.clear();
        }
      }
}
