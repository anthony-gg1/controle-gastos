class Validator {

    // Método para validar um nmero par (Exemplo)
    static validateOdd(value) {
        if (value % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    static validateCpf(value) {
        // Removendo espaços
        value = value.trim();

        // Verificando a existencia de pontos e hífens
        if (!(
            value.charAt(3) == "." &&
            value.charAt(7) == "." &&
            value.charAt(11) == "-"
        )) {
            return false;
        }

        // Removendo caracteres não numéricos
        value = value.replace(".", "");
        value = value.replace(".", "");
        value = value.replace("-", "");

        // Verificando o tamanho
        if (value.length != 11) {
            return false
        }

        // Verificando se há somente números
        if (!/^[0-9]+$/.test(value)) {
            return false;
        }

        return true;
    }
}

console.log(Validator.validateCpf("111.000.222-20"));