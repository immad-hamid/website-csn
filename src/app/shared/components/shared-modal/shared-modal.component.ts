import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicComponentLoaderDirective } from './dynamic-component-loader.directive';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss']
})
export class SharedModalComponent implements OnInit {
  @ViewChild(DynamicComponentLoaderDirective)
  dynamicComponent: DynamicComponentLoaderDirective;
  loadedComponent: any;
  componentName: any;

  constructor(
    public bsModalRef: BsModalRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.componentName
    );
    const viewContainerRef = this.dynamicComponent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    this.loadedComponent = componentRef.instance;
  }

}
