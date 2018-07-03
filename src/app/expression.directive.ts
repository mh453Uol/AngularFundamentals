import { Stack } from './datastructure/stack';
import { Directive, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appExpression]'
})
export class ExpressionDirective {
  @Input('type') type: string;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let expression: string = this.el.nativeElement.value;
    let output = 0;
    switch (this.type) {
      case 'postfix': {
        output = this.evaluatePostfix(expression).value;
      }
    }

    this.el.nativeElement.value = output;
  }

  evaluatePostfix(expression: string) {
    //1 1 + 2 3 * scan from left to right
    //if operator add to stack
    //if operand apply of last 2 element and 
    //add to stack
    let tokens = expression.split(' ');
    let stack = new Stack();
    let right: number;
    let left: number;

    for (let i = 0; i < tokens.length; i++) {
      if (this.isNumber(tokens[i])) {
        stack.push(+tokens[i]);
      } else {
        right = stack.pop().value;
        left = stack.pop().value;
        stack.push(this.evaluate(left, right, tokens[i]));
      }
    }


    if (!stack.isEmpty()) {
      return stack.pop();
    }

  }

  isNumber(token: string) {
    return !isNaN((Number(token)));
  }

  evaluate(left: number, right: number, operand: string): number {
    console.log(left, right, operand);
    switch (operand) {
      case '+': {
        return left + right;
      } case '-': {
        return left - right;
      } case '*': {
        return left * right;
      } case '/': {
        return left / right;
      } default: {
        return 0;
      }
    }
  }



}
