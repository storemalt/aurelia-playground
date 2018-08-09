import { bindable, inject, DOM } from 'aurelia-framework';

@inject(Element)

export class TodoListItem {
    @bindable todo;
    @bindable key;

    constructor(element){
        this.element = element;
    }

    bind(){
        console.log(this.key);
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