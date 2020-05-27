'use strict'
const inventory = {
    items: ['knife', 'Gas mask'],
    add(itemName) {
      this.items.push(itemName);
    },
    remove(itemName) {
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryOperation = function(itemName, inventoryAction) {
    console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
    inventoryAction.call(inventory, itemName);
  };
  
  invokeInventoryOperation('Medkit', inventory.add);
  // Invoking add opeartion on Medkit
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryOperation('Gas mask', inventory.remove);
  // Invoking remove opeartion on Фильтр
  
  console.log(inventory.items); // ['Knife', 'Medkit']