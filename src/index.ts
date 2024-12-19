import { lexer } from "./core/lexer";

const tokens = lexer.reset("(2 + 3) * 5;");

const pila = [];

while (true) {

    const token = tokens.next();

    if (!token) break;

    if (token.type == "whitespace") continue;

    if (token.type == "semicolon") {

        for (const token_pila of pila) {
            if (token_pila.type === "number") console.log(token_pila.value);
        }

    } else {
        pila.push(token);
    }
}