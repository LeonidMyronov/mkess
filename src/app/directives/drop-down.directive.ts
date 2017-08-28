import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnter(){
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    console.log(this.elRef);
  }
  @HostListener('mouseout') mouseLeave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
  }


}
