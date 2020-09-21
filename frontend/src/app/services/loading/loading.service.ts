import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  componentRef

  constructor
  (
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  show() {
    this.componentRef = this.componentFactoryResolver
    .resolveComponentFactory(LoadingComponent)
    .create(this.injector);
    
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;
    
    document.body.appendChild(domElem);
  }

  dismiss() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
