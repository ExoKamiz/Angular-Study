import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

//1
//We should add Directive decorator for showing that creating directive; should declare name of export class in module
//We should pass selector with future name of the directive to the constructor
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  //4
  //Getting parameters from parent element; by default color is blue, but in parent is red, there for blue change on red
  @Input('appStyle') color: string = 'blue'
  //Get object of styles from html
  @Input() dStyles!: { border?: string; fontWeight?: string; borderRadius?: string; };

  //5
  //Makes it easier to work with attributes inside an element
  @HostBinding('style.color') elColor:any = null
  //2
  //we can change style of element and thanks to ElementRef getting access to DOM
  constructor(private el: ElementRef, private r: Renderer2) {
    //this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  //3
  //Decorator, as arguments we pass event name, which we want to listen and for optimization pass [$event] as second argument
  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log(event)
  }
  //When the mouse on text turns blue
  @HostListener('mouseenter') onEnter(){
    // this.r.setStyle(this.el.nativeElement, 'color', this.color)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    //5
    //Equivalent elColor to parameter got from parent class
    this.elColor = this.color
  }
  //When mouse leave text turns default
  @HostListener('mouseleave') onLeave(){
    // this.r.setStyle(this.el.nativeElement, 'color', null)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.r.setStyle(this.el.nativeElement, 'border', null)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
    //5
    this.elColor = null
  }
}


