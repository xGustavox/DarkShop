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
    // Cria uma referencia do componente
    this.componentRef = this.componentFactoryResolver
    .resolveComponentFactory(LoadingComponent)
    .create(this.injector);
    
    // Recupera a DOM do elemento
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;
    
    // Coloca a DOM do elemento no body
    document.body.appendChild(domElem);
  }

  dismiss() {
    // Retira o elemento do app
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
