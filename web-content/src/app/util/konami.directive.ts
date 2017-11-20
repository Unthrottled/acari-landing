import {Directive, ElementRef, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({
    selector: '[konami]'
})
export class KonamiDirective {

    @Output()
    private konami = new EventEmitter<void>();
    private sequenceIndex: number = 0;
    private konamiCode: string[] = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

    constructor(el: ElementRef){

    }

    @HostListener('window:keyup',['$event'])
    handleKeyUp(event: KeyboardEvent): void{
        if(event.keyCode && event.keyCode.toString() === this.konamiCode[this.sequenceIndex++]){
            if(this.sequenceIndex == this.konamiCode.length){
                this.konami.emit();
            }
        } else {
            this.sequenceIndex = 0;
        }
    }
}