function Maggiore() {
    if (arguments.length === 0) {
        return null; // Se non ci sono argomenti, restituisci null
    }
    
    var max = arguments[0]; // Assume il primo argomento come massimo iniziale
    
    // Itera attraverso gli argomenti restanti per trovare il massimo
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    
    return max;
}
