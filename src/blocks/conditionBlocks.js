// GROUP BY …
// HAVING …
// ORDER BY …
// LIMIT …
// OFFSET …
// BINDINGS …
import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_condition', {
init: function() {
    this.appendStatementInput("GROUP BY")
        .setCheck("Modifier")
        .appendField("GROUP BY")
    this.appendStatementInput("HAVING")
        .setCheck("Modifier")
        .appendField("HAVING")
    this.appendStatementInput("ORDER")
        .appendField("ORDER BY")
        .setCheck("Order")
    this.appendStatementInput("LIMIT")
        .appendField("LIMIT")
        .setCheck("Limit")
    this.appendStatementInput("OFFSET")
        .appendField("OFFSET")
        .setCheck("Offset")
    this.setPreviousStatement(true, "Condition");
    this.setNextStatement(true, "Condition");
    this.setColour(180);
    this.setTooltip("Define a filter condition.");
    this.setHelpUrl("");
}
});


block('sparql_filter', {
    init: function() {
      this.appendValueInput("FILTER_CONDITION")
          .setCheck("Condition")
          .appendField("FILTER");
      this.setPreviousStatement(true, "Property");
      this.setNextStatement(true, "Property");
      this.setColour(180);
      this.setTooltip("Apply a filter condition to the query.");
      this.setHelpUrl("");
    }
  });

block('sparql_existence', {
    init: function() {
        this.appendValueInput("Variables")
            .appendField(new Blockly.FieldDropdown([["EXISTS", "EXISTS"], ["NOT EXISTS", "NOT EXISTS"]]), "EXISTS");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip("EXISTS/NOT EXISTS keyword seletion block connects to Filter block (optional).");
    }
});

block('sparql_orderby', {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["ASC", "ASC"], ["DESC", "DESC"]]), "ORDER")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setPreviousStatement(true, "Order");
      this.setNextStatement(true, "Order");
      this.setColour(160);
      this.setTooltip("Order results by a specified variable.");
      this.setHelpUrl("");
    }
  });


block('sparql_groupby', {
    init: function() {
      this.appendDummyInput()
          .appendField("GROUP BY")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setPreviousStatement(true, "Modifier");
      this.setNextStatement(true, "Modifier");
      this.setColour(160);
      this.setTooltip("Group results by specified variables.");
      this.setHelpUrl("");
    }
  });
  

block('sparql_having', {
    init: function() {
      this.appendValueInput("HAVING_CONDITION")
          .setCheck("Condition")
          .appendField("HAVING");
      this.setPreviousStatement(true, "Modifier");
      this.setNextStatement(true, "Modifier");
      this.setColour(160);
      this.setTooltip("Apply a condition to groups defined by GROUP BY.");
      this.setHelpUrl("");
    }
  });
  
  
block('sparql_limit', {
    init: function() {
        this.appendValueInput("LIMIT")
            .setCheck("Number")
            .appendField("LIMIT");
        this.setPreviousStatement(true, "query_limit_offset");
        this.setNextStatement(true, "query_limit_offset");
        this.setColour(160);
        this.setTooltip("Limit the number of results.");
        this.setHelpUrl("");
    }
});

block('sparql_offset', {
    init: function() {
      this.appendValueInput("OFFSET")
          .setCheck("Number")
          .appendField("OFFSET");
      this.setPreviousStatement(true, "query_limit_offset");
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Offset the results.");
      this.setHelpUrl("");
    }
});
  