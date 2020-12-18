////Custom Block creation for SQL request///

Blockly.Blocks['sql_select'] = {
  init: function() {
    this.appendValueInput("SELECT")
        .setCheck(null)
        .appendField("SELECT");
    
  this.appendValueInput("FROM")
          .setCheck(null)
          .appendField("FROM");

  this.appendValueInput("WHERE")
        .setCheck(null)
        .appendField("WHERE");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_table'] = {
  init: function() {
    this.appendValueInput("TABLE")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("table"), "table");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("*");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("select all");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_column'] = {
  init: function() {
    this.appendValueInput("COLUMN")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("column"), "column");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_as'] = {
  init: function() {
    this.appendValueInput("AS")
        .setCheck(null);
    this.appendValueInput("AS_PLUS")
        .setCheck(null)
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("alias"), "alias")
        .appendField(" ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_add'] = {
  init: function() {
    this.appendValueInput("ADD")
        .setCheck(null)
        .appendField("ADD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("add an other table to the SELECT");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_and'] = {
  init: function() {
    this.appendValueInput("AND")
        .setCheck(null)
        .appendField("AND");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_or'] = {
  init: function() {
    this.appendValueInput("OR")
        .setCheck(null)
        .appendField("OR");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_not'] = {
  init: function() {
    this.appendValueInput("NOT")
        .setCheck(null)
        .appendField("NOT");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_order_by'] = {
  init: function() {
    this.appendValueInput("ORDER_BY")
        .setCheck(null)
        .appendField("ORDER BY")
        .appendField(new Blockly.FieldTextInput("column"), "ORDER_BY_COLUMN")
        .appendField(new Blockly.FieldDropdown([["ASC","ASC"], ["DESC","DESC"]]), "ORDER_BY_SENS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["IS NULL","null"], ["IS NOT NULL","not_null"]]), "dropdown_null");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_join'] = {
  init: function() {
    this.appendValueInput("JOIN")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["INNER JOIN","inner"], ["LEFT JOIN","left"], ["RIGHT JOIN","right"], ["FULL JOIN","full"]]), "dropdown_join");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_in'] = {
  init: function() {
    this.appendStatementInput("IN")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["IN","IN"], ["NOT IN","NOT IN"]]), "dropdown_in");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_compare'] = {
  init: function() {
        this.appendValueInput("COMPARED")
        .setCheck(null);
    this.appendValueInput("COMPARE")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["=","="], [">",">"], ["<","<"], [">=",">="], ["<=","<="], ["<>","<>"]]), "dropdown_compare");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_value'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_sum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SUM (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("sum the column elements");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_max'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MAX (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("determins the maximum value of the column");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_min'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MIN (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("determins the minimum value of the column");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("COUNT (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("calculate the number of column of the table");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_avg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AVG (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(" )");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_round'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ROUND(")
        .appendField(new Blockly.FieldTextInput("column"), "column")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};