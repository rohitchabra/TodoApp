import { Item } from './../model/ItemModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  constructor() { 
    this.data.id = 1;
  }

  data: Item = new Item();
  items: Item[] = [];
  selectedItems:Item[]= [];
  selectedAll: boolean;

  ngOnInit() {
  }

  addItem = (item: Item) => {
    if(item.item == "" || item.item == null)
    {
      alert('add something');
    }else{
      item.id = this.data.id++;
      item.selected =false;
      this.items.push(item);
      this.data.item = "";
    }
  }

  deleteItem = (item:Item) => {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  deleteAll = () => {
    this.items = [];
  }

  selectedItem = (item: Item) => {
    item.selected = !item.selected;
  }

  deleteSelectedItem = () => {
    this.items.forEach(item => {
      if(item.selected)
      {
        this.selectedItems.push(item);
      }
    });
    this.selectedItems.forEach(item => {
      let i = this.items.indexOf(item);
      this.items.splice(i, 1);
    });
    this.selectedItems = [];
  }

  selectAll() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.items.every(function(item:any) {
        return item.selected == true;
      })
  }

}
