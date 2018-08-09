import { bindable, inject, DOM } from 'aurelia-framework';

@inject(Element)

export class TodoListItem {
    @bindable todo;

    constructor(element){
        this.element = element;
    }

    removeTodo() {
        console.log(this.element);
        this.element.dispatchEvent(
            DOM.createCustomEvent('remove-todo', {
                bubbles:true,
                detail:this.todo
        }));
    }



}