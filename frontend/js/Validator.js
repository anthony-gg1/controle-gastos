class Validator {

    // Método para validar CPFs
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

    // Método para validar E-mails
    static validateEmail(value) {
        // Verificando se o primeiro dígito é um número
        if (/^[0-9]$/.test(value.charAt(0))) {
            return false;
        }

        // Verificando com base na estrutura de um E-mail padrão
        if (!/^[a-zA-Z0-9_.]+[@][a-zA-Z0-9_.]+$/.test(value)) {
            return false
        }

        return true;
    }

    // Método para validar Senhas
    static validatePassword(value) {
        // Verificando tamanho
        if (value.length < 8) {
            return false;
        }

        return true;
    }
}