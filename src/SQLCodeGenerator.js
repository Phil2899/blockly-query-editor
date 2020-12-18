//Langage creation//
Blockly.SQL = new Blockly.Generator('SQL');

//Creation of the operational precedece//
Blockly.SQL.PRECEDENCE = 0;

//Generating SQL for the custom blocks//
Blockly.SQL['sql_select'] = function(block) {

  var value_select = Blockly.SQL.valueToCode(block, 'SELECT', Blockly.SQL.PRECEDENCE);
  var value_from = Blockly.SQL.valueToCode(block, 'FROM', Blockly.SQL.PRECEDENCE);
  var value_where = Blockly.SQL.valueToCode(block, 'WHERE', Blockly.SQL.PRECEDENCE);

  var code = 'SELECT '+value_select;
  if (value_from != '') {
    code += " FROM "+value_from;
  };
  if (value_where != '') {
    code += " WHERE "+ value_where;
  };

  return code;
};

Blockly.SQL['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  var value_table = Blockly.SQL.valueToCode(block, 'TABLE', Blockly.SQL.PRECEDENCE);

  var code = text_table + value_table;

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_all'] = function(block) {

  var code = '*';

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_column'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  var value_column = Blockly.SQL.valueToCode(block, "COLUMN", Blockly.SQL.PRECEDENCE);

  var code = text_table + '.' + text_column;
  if (value_column != "") {
    code += ' , ' + value_column;
  };

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_as'] = function(block) {
  var value_as = Blockly.SQL.valueToCode(block, 'AS', Blockly.SQL.PRECEDENCE);
  var text_alias = block.getFieldValue('alias');
  var value_as_plus = Blockly.SQL.valueToCode(block, 'AS_PLUS', Blockly.SQL.PRECEDENCE);

  var code = value_as + ' AS ' + text_alias;
  if (value_as_plus != "") {
    code += " , " + value_as_plus;
  };

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_add'] = function(block) {
  var value_add = Blockly.SQL.valueToCode(block, 'ADD', Blockly.SQL.PRECEDENCE) || '\'\'';

  var code = ' , ' + value_add;
  return code;
};

Blockly.SQL['sql_or'] = function(block) {
  var value_or = Blockly.SQL.valueToCode(block, 'OR', Blockly.SQL.PRECEDENCE);

  var code = ' OR '+value_or;

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_not'] = function(block) {
  var value_not = Blockly.SQL.valueToCode(block, 'NOT', Blockly.SQL.PRECEDENCE);

  var code = ' NOT '+value_not;

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_order_by'] = function(block) {

  var SENS = {
    'ASC': [' ASC '],
    'DESC': [' DESC ']
  }
  var tuple = SENS[block.getFieldValue('ORDER_BY_SENS')];
  var sens = tuple[0];


  var text_order_by_column = block.getFieldValue('ORDER_BY_COLUMN');

  var value_order_by = Blockly.SQL.valueToCode(block,'ORDER_BY', Blockly.SQL.PRECEDENCE);

  var code = " ORDER BY " + text_order_by_column + sens + value_order_by;

  return code;
};

Blockly.SQL['sql_null'] = function(block) {
  var NULL = {
    'null': [' IS NULL '],
    'not_null': [' IS NOT NULL ']
  }
  var tuple = NULL[block.getFieldValue('dropdown_null')];
  var drop = tuple[0];

  var code = drop;
  return [code, Blockly.SQL.PRECEDENCE];

}

Blockly.SQL['sql_join']= function(block){
  var JOIN = {
    'inner': [' INNER JOIN '],
    'right': [' RIGHT JOIN '],
    'left': [' LEFT JOIN '],
    'full': [' FULL JOIN ']
  }

  var tuple = JOIN[block.getFieldValue('dropdown_join')];
  var drop = tuple[0];

  var value_join = Blockly.SQL.valueToCode(block, 'JOIN', Blockly.SQL.PRECEDENCE);

  var code = drop + value_join;

  return [code, Blockly.SQL.PRECEDENCE];
}

Blockly.SQL['sql_in'] = function(block) {
  
  var IN ={
    'IN' : [' IN '],
    'NOT IN': [' NOT IN ']
  }

  var truple = IN[block.getFieldValue('dropdown_in')];
  var drop_in = truple[0];

  var statements_in = Blockly.SQL.statementToCode(block, 'IN');
  
  var code = drop_in + '(' + statements_in + ')' ;
  
  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_compare'] = function(block) {
  
  var COMPARE = {
    '=': [' = '],
    '>': [' > '],
    '<': [' < '],
    '>=': [' >= '],
    '<=': [' <= '],
    '<>': [' <> ']
  }

  var truple = COMPARE[block.getFieldValue('dropdown_compare')];
  var drop_comp = truple[0];

  var value_compared = Blockly.SQL.valueToCode(block, 'COMPARED', Blockly.SQL.PRECEDENCE)
  var value_compare = Blockly.SQL.valueToCode(block, 'COMPARE', Blockly.SQL.PRECEDENCE);

  var code = value_compared + drop_comp + value_compare;

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_value'] = function(block) {
  var text_value = block.getFieldValue('value');
  var value_value = Blockly.SQL.valueToCode(block, 'VALUE', Blockly.SQL.PRECEDENCE);

  var code = text_value + value_value;

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_f_sum'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' SUM ('+text_column+') ';

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_f_max'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' MAX ('+text_column+') ';

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_f_min'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' MIN ('+text_column+') ';

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_f_count'] = function(block) {
  var text_table = block.getFieldValue('table');

  var code = ' COUNT ('+text_table+') ';

  return [code, Blockly.SQL.PRECEDENCE];
};

Blockly.SQL['sql_f_avg'] = function(block) {
  var text_table = block.getFieldValue('table');

  var code = 'AVG ('+text_table+') ';
  return code;
};

Blockly.SQL['sql_f_round'] = function(block) {
  var text_column = block.getFieldValue('column');

  var code = ' ROUND('+text_column+') ';

  return [code, Blockly.SQL.PRECEDENCE];
};