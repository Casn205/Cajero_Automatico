function DispensarBilletes(valor) {
    let Matriz = Array(4).fill(null).map(() => Array(4).fill(0));
    let Vector = [];
    let cantidad = [0, 0, 0, 0]; 
    let Valores = [100000, 50000, 20000, 10000];
    let Acumulado = 0;

    while (Acumulado < valor) {
        for (let x = Valores.length - 1; x >= 0; x--) {
            for (let y = x; y >= 0; y--) {
                if (Acumulado + Valores[y] <= valor) {
                    Matriz[Math.abs(x-3)][y] = Valores[y];
                    Acumulado += Valores[y];
                    cantidad[y] += 1;
                }
            }
        }
        // Agregar una copia de la matriz al vector
        Vector.push(JSON.parse(JSON.stringify(Matriz)));
        limpiarMatriz();
    }
    
    function limpiarMatriz() {
        for (let i = 0; i < Matriz.length; i++) {
            for (let j = 0; j < Matriz[i].length; j++) {
                Matriz[i][j] = 0;
            }
        }
    }
    
    // Calcular billetes para 1000 retiros iguales
    let billetesParaMil = cantidad.map(cant => cant * 1000);
    
    const resultados = {
        valor: valor,
        matrices: Vector,
        cantidadBilletes: cantidad,
        valoresBilletes: Valores,
        acumulado: Acumulado,
        billetesParaMil: billetesParaMil
    };
    
    
    localStorage.setItem('resultadosDispensador', JSON.stringify(resultados));
    window.location.href = 'Resultados.html';
}