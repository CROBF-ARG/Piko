import moo from 'moo';


export const lexer = moo.compile({
    // Palabras clave
    keyword: ['if', 'else', 'while', 'for', 'fn', 'return', '...'],

    // Booleans
    boolean: ['true', 'false'],

    // Identificadores
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,

    // Números
    number: /(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?/,

    // Operadores
    operator: ['+', '-', '*', '/', '=', '==', '!=', '<', '>', '<=', '>='],

    // Símbolos
    lparen: '\(',
    rparen: '\)',
    lbrace: '{',
    rbrace: '}',
    lbracket: '\[',
    rbracket: '\]',
    semicolon: ';',
    comma: ',',

    // Cadenas de texto
    string: { match: /"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'/, value: s => s.slice(1, -1) },

    // Espacios en blanco y comentarios
    whitespace: { match: /[ \t\r\n]+/, lineBreaks: true },
    comment: /\/\/[^\n]*|\/\*[\s\S]*?\*\//,
});